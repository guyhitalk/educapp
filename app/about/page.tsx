"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Logo and Title */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Image src="/educapp-logo.svg" alt="EducApp Logo" width={64} height={64} className="w-16 h-16" />
          <div>
            <h1 className="text-5xl font-bold text-foreground">
              EducApp<span className="text-primary">.us</span>
            </h1>
            <p className="text-xl text-muted-foreground">Faith-Driven AI Tutor</p>
          </div>
        </div>

        {/* About Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">About EducApp</h2>
            <p className="text-lg leading-relaxed text-foreground">
              EducApp is the leading Faith-Driven AI tutoring platform for Education.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Featuring biblical worldview integration across all academic subjects</li>
              <li>Launched from a vision to serve families with technology that honors God and empowers parents</li>
              <li>Our mission is to make elite Christian education accessible to every family through AI-powered adaptive tutoring</li>
            </ul>
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "EducApp is what families have been praying for—a tutor that knows both Scripture and Math."
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">The Challenge</h2>
            <p className="text-lg leading-relaxed text-foreground">
              <strong>Information overload is an extreme challenge in education.</strong>
            </p>
            <p className="text-foreground">
              Families face an overwhelming task: teaching multiple children across various grade levels and subjects, often while managing work and household responsibilities. Many lack confidence in their ability to provide the depth and breadth of Christian education they desire for their children. The burden of curriculum planning, lesson delivery, assessment, and biblical integration can make faithful families question whether they're truly equipped to educate their children—even when their hearts are fully committed to this calling.
            </p>
            <p className="text-foreground">
              To serve these families, we built EducApp to provide on-demand, biblically-grounded tutoring that adapts to each student's learning pace, reinforces the students' curricula, and maintains uncompromising biblical authority across all subjects.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Mission → Vision → Values</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">Mission</h3>
            <p className="text-foreground">
              To equip families with AI-powered Christian education that honors God, supports parents, and develops children who can think clearly, speak persuasively, and live faithfully.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Vision</h3>
            <p className="text-foreground">
              To become the trusted educational partner for every Christian family, providing adaptive learning that integrates biblical truth across all subjects while respecting parents as the primary educators under God's authority.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Values</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li><strong>Biblical Authority:</strong> Scripture is true, inerrant, and the foundation of all learning</li>
              <li><strong>Parental Empowerment:</strong> Parents, not institutions, are ordained by God to educate their children</li>
              <li><strong>Excellence & Truth:</strong> We pursue the highest academic standards rooted in the classical tradition</li>
              <li><strong>Servant Leadership:</strong> We serve families humbly, recognizing education as discipleship</li>
              <li><strong>Accessible Quality:</strong> Elite education should not require elite resources</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Team</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">Co-Founders</h3>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary">A.G. "Guy" Fava, M.S., CCC-SLP</h4>
              <p className="italic text-muted-foreground mb-2">Faith-Driven Entrepreneur, Coach, Speech-Language Pathologist, and Educator</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground">
                <li>Master of Science in Communication Sciences</li>
                <li>Certified and Licensed Speech-Language Pathologist</li>
                <li>Wellbeing Coach</li>
                <li>Homeschool Dad</li>
                <li>AI Python and Machine Learning training (NVIDIA)</li>
                <li>Researcher and Editorial Board Member of Scientific Journals</li>
                <li>Published author on faith-driven entrepreneurship and innovation</li>
                <li>Multilingual (English, Italian, Portuguese, Spanish)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary">D.M.C. "Dida" Fava, Ph.D.</h4>
              <p className="italic text-muted-foreground mb-2">Faith-Driven Entrepreneur, Doctor in Innovation, and Educator</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground">
                <li>Design Thinking in Innovation</li>
                <li>Classical Christian educator and mother</li>
                <li>Co-founder and strategic partner</li>
                <li>Expertise in educational innovation and design</li>
                <li>Passionate advocate for biblical worldview education</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why EducApp Exists</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">The Problem: Educating</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Low quality education in many public systems</li>
              <li>Lack of parental control over content and worldview</li>
              <li>Lack of character and soft skills development</li>
              <li>Parental lack of confidence in teaching ability</li>
              <li>Overwhelming time demands to teach multiple subjects and grade levels</li>
              <li>Limited access to quality Christian curriculum resources</li>
              <li>Need for organizational systems and routines</li>
              <li>Isolation and lack of support</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">The Solution: EducApp</h3>
            <p className="text-foreground">
              EducApp is a Cloud-Based Faith-Driven AI Tutoring Platform that breaks the distance between parents and elite education, making teaching and learning easier, more affordable, and more effective.
            </p>
            <ul className="list-none space-y-2 mt-4 text-foreground">
              <li><strong>Practical:</strong> AI tutoring available 24/7 from home</li>
              <li><strong>Simple:</strong> Easy-to-use platform for parents and students</li>
              <li><strong>Economical:</strong> All-inclusive education support at accessible pricing</li>
              <li><strong>Faithful:</strong> Uncompromising biblical worldview integration</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Foundation</h2>

            <h3 className="text-2xl font-bold mb-3 text-foreground">Biblical Worldview</h3>
            <p className="text-foreground">Our convictions are embedded in every line of code:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>The Bible is the inerrant, inspired, authoritative Word of God</li>
              <li>Jesus Christ is THE Way, Truth, and Life (John 14:6)</li>
              <li>God created humans male and female in His image (Genesis 1:27)</li>
              <li>The creation account is true and historical</li>
              <li>Marriage is between one man and one woman</li>
              <li>Eternal life comes only through Jesus Christ (John 11:25, Romans 10:9)</li>
              <li>Parents are primary educators under God's authority</li>
              <li>Education is discipleship—teaching children to know God and pursue truth, goodness, and beauty</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Classical Education Philosophy</h3>
            <p className="text-foreground">
              We reject modern educational relativism and embrace the time-tested classical approach:
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "God gave them knowledge and skill in all learning and wisdom: and Daniel had understanding in all visions and dreams... And in all matters of wisdom and understanding, that the king inquired of them, he found them ten times better than all the magicians and astrologers that were in all his realm."
              <br />
              — Daniel 1:17-20
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Classical Education:</h4>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>Moved by values centered on "why?"</li>
                  <li>Recognizes responsibility</li>
                  <li>Knowledge as an intimate pursuit</li>
                  <li>Emphasizes thinking, contemplation, rest</li>
                  <li>Freedom to pursue truth</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">vs. Modern Education:</h4>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>Intentionally value-neutral, centered on "how?"</li>
                  <li>Refuses responsibility</li>
                  <li>Knowledge as superficial data collection</li>
                  <li>Emphasis on testing and performance</li>
                  <li>Restriction and conformity</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Supported By Faith & Excellence</h2>
            <p className="text-foreground">
              EducApp represents the convergence of cutting-edge AI technology, classical educational philosophy, and unwavering biblical conviction. We're building something that doesn't yet exist: a truly Faith-Driven AI tutor that serves parents, honors God, and educates children in truth.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "Train up a child in the way he should go: and when he is old, he will not depart from it."
              <br />
              — Proverbs 22:6
            </blockquote>
          </section>
        </article>

        {/* Footer */}
        <footer className="border-t border-border pt-8 mt-12">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">© EducApp 2025. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              <Link href="/advertising" className="text-primary hover:underline">
                Advertising Policy
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Contact:{" "}
              <a href="mailto:educapp@hitalk.us" className="text-primary hover:underline">
                educapp@hitalk.us
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
