import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/about">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">EducApp Advertising Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p className="text-sm text-muted-foreground">Last Updated: November 13, 2025</p>
          
          <p>
            EducApp Inc. ("EducApp," "we," "us," or "our") is committed to maintaining a safe, family-friendly, 
            and educationally-focused environment. This Advertising Policy describes our approach to advertising 
            and sponsored content on the EducApp Platform.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Advertising Philosophy</h2>
            <p>
              <strong>Faith-Driven and Family-Focused:</strong> EducApp exists to serve families seeking Christian 
              education. Any advertising or sponsored content must align with our biblical values and educational mission.
            </p>
            <p className="mt-4">
              <strong>Current Status:</strong> As of this date, EducApp.us operates on a subscription-based model and 
              does not currently display third-party advertisements. However, we reserve the right to introduce advertising 
              in the future, subject to the guidelines below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Types of Permitted Advertising (If Introduced)</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We May Display:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational products and services (curricula, books, learning tools)</li>
              <li>Faith-based resources (Christian publishers, ministries, conferences)</li>
              <li>Family-friendly products and services</li>
              <li>EducApp's own services and features</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">All advertisements must:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Align with biblical values and Christian worldview</li>
              <li>Be appropriate for families and children</li>
              <li>Be clearly labeled as advertisements or sponsored content</li>
              <li>Not mislead or deceive users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Prohibited Advertising Content</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We Will NOT Knowingly Display Advertisements For:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alcohol, tobacco, or controlled substances</li>
              <li>Gambling or casinos</li>
              <li>Pornography or sexually explicit content</li>
              <li>Violence, weapons, or ammunition</li>
              <li>Content that contradicts biblical teaching</li>
              <li>Content promoting non-Christian religions or anti-Christian perspectives</li>
              <li>Political campaigns or partisan political content</li>
              <li>Products or services targeting children without parental involvement</li>
              <li>Deceptive, fraudulent, or misleading offers</li>
              <li>Content that discriminates based on race, national origin, or other protected characteristics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Separation of Content and Advertising</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Clear Distinction:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All advertisements will be clearly labeled</li>
              <li>Advertising will be visually distinguished from educational content</li>
              <li>Sponsored content will be marked as "Sponsored," "Advertisement," or similar designation</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Editorial Independence:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Advertisers cannot influence educational content</li>
              <li>AI tutoring responses are never influenced by advertisers</li>
              <li>Curriculum recommendations are based solely on educational merit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data and Privacy</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">User Data Protection:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not sell user data to advertisers</li>
              <li>Advertisers do not receive personally identifiable information</li>
              <li>Any behavioral advertising (if introduced) will use aggregate, anonymized data only</li>
              <li>You may opt-out of behavioral advertising through account settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">No Tracking for Children:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not create profiles of children for advertising purposes</li>
              <li>We comply with COPPA and children's privacy laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Sponsored Educational Content</h2>
            <p>If we introduce sponsored educational content:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>It will be clearly labeled as sponsored</li>
              <li>It must meet our educational quality standards</li>
              <li>It must align with biblical worldview</li>
              <li>Parents can opt-out or provide feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Advertiser Responsibilities</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Advertisers Must:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful advertising</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect intellectual property rights</li>
              <li>Ensure advertisements are appropriate for family audiences</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Advertisers May Not:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make false or misleading claims</li>
              <li>Use deceptive practices</li>
              <li>Target children without parental consent</li>
              <li>Promote content contrary to biblical values</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. User Control and Feedback</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">You May:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Report inappropriate advertisements at educapp@educapp.us</li>
              <li>Provide feedback on advertising policies</li>
              <li>Opt-out of certain advertising features (when available)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">We Will:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review reported advertisements promptly</li>
              <li>Remove advertisements that violate this policy</li>
              <li>Consider user feedback in advertising decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Modifications to Advertising Policy</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We Reserve the Right To:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify this Advertising Policy at any time</li>
              <li>Accept, reject, or remove advertisements at our sole discretion</li>
              <li>Discontinue advertising programs</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Notice of Changes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Material changes will be announced on the Platform</li>
              <li>Continued use constitutes acceptance of changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. No Endorsement</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Important Disclaimer:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Display of advertisements does not constitute endorsement</li>
              <li>EducApp is not responsible for advertiser products or services</li>
              <li>Users should exercise independent judgment</li>
              <li>Transactions with advertisers are between user and advertiser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Compliance</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We Comply With:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Federal Trade Commission (FTC) advertising guidelines</li>
              <li>Children's Online Privacy Protection Act (COPPA)</li>
              <li>Children's advertising laws</li>
              <li>All applicable state and federal regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
            <p>Questions or Concerns About Advertising:</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold">EducApp Inc.</p>
              <p>Email: educapp@educapp.us</p>
              <p>Website: educapp.us</p>
            </div>
            
            <p className="mt-6">To Report Inappropriate Advertising:</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p>Email: educapp@educapp.us</p>
              <p>Subject: Advertising Concern</p>
              <p className="mt-2 text-sm">We will investigate all reports promptly.</p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
            <p className="text-center font-semibold">
              By using EducApp, you acknowledge that you have read and understood this Advertising Policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
