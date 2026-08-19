// Server-only helper that fetches the Verse of the Day from the YouVersion
// Bible Platform API. This runs on the server, so the App Key is never exposed
// to the browser. No external dependencies — just the built-in fetch().
//
// Verified endpoints (via the interactive API reference at
// https://developers.youversion.com/api):
//   1. GET /v1/verse_of_the_days/{day}  ->  { day, passage_id: "ROM.6.5" }
//   2. GET /v1/bibles/{id}/passages/{passage_id}?format=text
//        ->  { id, content: "…verse text…", reference: "Romans 6:5" }

const API_BASE = "https://api.youversion.com/v1"

// Your private key from the YouVersion Platform Portal. Stored as an
// environment variable so it never ships to the browser.
const APP_KEY = process.env.YOUVERSION_APP_KEY

// Which Bible version to display. Defaults to 206 = World English Bible
// (public domain, confirmed via the API). Override with YOUVERSION_BIBLE_VERSION.
const BIBLE_VERSION = process.env.YOUVERSION_BIBLE_VERSION || "206"

// A friendly label for the version, shown under the verse.
const BIBLE_VERSION_LABEL = process.env.YOUVERSION_BIBLE_LABEL || "WEB"

export type Verse = {
  reference: string
  text: string
  version: string
}

// The YouVersion "Verse of the Day" endpoint is keyed by day-of-year (1–366).
function dayOfYear(date = new Date()): number {
  const start = Date.UTC(date.getFullYear(), 0, 0)
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  return Math.floor((today - start) / 86_400_000)
}

// With format=text the content is plain, but strip tags defensively.
function stripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function isConfigured(): boolean {
  return Boolean(APP_KEY)
}

export async function getVerseOfTheDay(): Promise<Verse | null> {
  if (!APP_KEY) return null

  const headers = { "X-YVP-App-Key": APP_KEY, Accept: "application/json" }
  const day = dayOfYear()

  try {
    // 1) Which verse is today's Verse of the Day?
    const votdRes = await fetch(`${API_BASE}/verse_of_the_days/${day}`, {
      headers,
      // Re-check hourly. Because the URL includes the day number, each new day
      // is a fresh cache entry, so the verse rolls over automatically.
      next: { revalidate: 3600 },
    })
    if (!votdRes.ok) {
      console.log("[v0] VOTD lookup failed:", votdRes.status)
      return null
    }
    const { passage_id: passageId } = (await votdRes.json()) as { passage_id?: string }
    if (!passageId) {
      console.log("[v0] No passage_id in VOTD response")
      return null
    }

    // 2) Fetch the actual text of that verse in the chosen version.
    const passageRes = await fetch(
      `${API_BASE}/bibles/${BIBLE_VERSION}/passages/${passageId}?format=text`,
      { headers, next: { revalidate: 3600 } },
    )
    if (!passageRes.ok) {
      console.log("[v0] Passage lookup failed:", passageRes.status)
      return null
    }
    const passage = (await passageRes.json()) as {
      id?: string
      content?: string
      reference?: string
    }

    return {
      reference: passage.reference || passageId,
      text: stripHtml(String(passage.content ?? "")),
      version: BIBLE_VERSION_LABEL,
    }
  } catch (err) {
    console.log("[v0] Error fetching Verse of the Day:", err)
    return null
  }
}
