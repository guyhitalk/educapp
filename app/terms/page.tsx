import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-foreground">EducApp Terms of Use</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p className="text-sm text-muted-foreground">Last Updated: November 13, 2025</p>
          
          <p>
            These Terms of Use ("Terms") govern your access to and use of EducApp.us (the "Platform"), 
            including all services, features, content, and applications offered by EducApp Inc., a faith-driven 
            educational technology company ("EducApp," "we," "us," or "our").
          </p>
          
          <p className="font-semibold">
            By using EducApp, you agree to these Terms. If you do not agree, do not use the Platform.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. About EducApp</h2>
            <p>
              EducApp is a Faith-Driven AI tutoring platform designed to provide Christian education with 
              biblical worldview integration across all academic subjects. We serve families seeking to 
              educate their children with excellence rooted in biblical truth.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Account Registration</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Registration Requirements:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must create an account to access EducApp services</li>
              <li>You must provide accurate information including name, email address, and family information</li>
              <li>Parents/guardians must be 18 years or older to create accounts</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activity under your account</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Account Security:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not share your password with anyone</li>
              <li>Notify us immediately at educapp@educapp.us if you suspect unauthorized account access</li>
              <li>We are not liable for losses due to unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Acceptable Use</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">You May:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use EducApp for personal, non-commercial educational purposes</li>
              <li>Access educational content and tutoring services</li>
              <li>Interact with AI tutoring features</li>
              <li>Download materials for personal use</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">You May Not:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use EducApp for any unlawful purpose</li>
              <li>Share your account with others outside your immediate family</li>
              <li>Attempt to reverse engineer, hack, or compromise the Platform</li>
              <li>Use automated systems (bots, scrapers, etc.) to access the Platform</li>
              <li>Copy, distribute, or resell EducApp content</li>
              <li>Post harmful, offensive, or inappropriate content</li>
              <li>Impersonate others or misrepresent your identity</li>
              <li>Interfere with other users' access to the Platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Our Content:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content on EducApp (text, graphics, logos, software, AI responses) is owned by EducApp Inc. or our licensors</li>
              <li>Content is protected by copyright, trademark, and other intellectual property laws</li>
              <li>You receive a limited, non-exclusive, non-transferable license to use the Platform for personal educational purposes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">User Content:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You retain ownership of any content you submit (questions, assignments, etc.)</li>
              <li>By submitting content, you grant EducApp a license to use, store, and process your content to provide services</li>
              <li>You represent that you have the right to submit any content you provide</li>
              <li>You are responsible for ensuring your content complies with applicable laws</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Content:</h3>
            <p>You may not submit content that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringes on others' intellectual property rights</li>
              <li>Contains personal information of others without permission</li>
              <li>Is illegal, harmful, threatening, abusive, or offensive</li>
              <li>Contains viruses or malicious code</li>
              <li>Promotes discrimination, hatred, or violence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Educational Disclaimers</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Important Limitations:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>EducApp provides educational support and tutoring assistance</li>
              <li>EducApp is NOT a substitute for parental oversight, professional educational assessment, or formal schooling</li>
              <li>Parents remain primarily responsible for their children's education</li>
              <li>AI-generated content is for educational purposes only and may contain errors</li>
              <li>Users should verify information from multiple sources</li>
              <li>EducApp does not guarantee specific educational outcomes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Biblical Content:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>EducApp integrates biblical worldview across all subjects</li>
              <li>Content reflects conservative Christian theological positions</li>
              <li>Parents are encouraged to discuss theological topics with their children</li>
              <li>EducApp supplements but does not replace family faith formation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Privacy and Data Use</h2>
            <p>
              Your use of EducApp is also governed by our Privacy Policy. By using EducApp, you consent to 
              our collection and use of information as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Subscription and Payment</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Subscription Terms:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to EducApp requires a paid subscription (except during free trials or beta periods)</li>
              <li>Subscription fees are charged in advance on a recurring basis</li>
              <li>You authorize us to charge your payment method</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You may cancel at any time through your account settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Refunds:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refund policies will be clearly stated at the time of purchase</li>
              <li>We reserve the right to modify pricing with advance notice to subscribers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Termination</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We May Suspend or Terminate Your Account If:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You violate these Terms</li>
              <li>You engage in fraudulent activity</li>
              <li>You abuse or misuse the Platform</li>
              <li>We discontinue the service</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">You May Terminate:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancel your subscription at any time through account settings</li>
              <li>Contact us at educapp@educapp.us for assistance</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Effect of Termination:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will lose access to the Platform</li>
              <li>We may delete your data in accordance with our Privacy Policy</li>
              <li>Certain provisions of these Terms survive termination (e.g., intellectual property rights, disclaimers, limitations of liability)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Disclaimers and Limitations of Liability</h2>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <p className="font-semibold mb-4">AS-IS BASIS:</p>
              <p className="uppercase">
                EDUCAPP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              
              <p className="font-semibold mt-6 mb-4">NO GUARANTEE:</p>
              <p className="uppercase mb-2">WE DO NOT GUARANTEE THAT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Platform will be error-free or uninterrupted</li>
                <li>Defects will be corrected</li>
                <li>The Platform is free from viruses or harmful components</li>
                <li>Educational results will be achieved</li>
              </ul>
              
              <p className="font-semibold mt-6 mb-4">LIMITATION OF LIABILITY:</p>
              <p className="uppercase mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>EDUCAPP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO EDUCAPP IN THE PAST 12 MONTHS, OR $100, WHICHEVER IS GREATER</li>
                <li>SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME LIMITATIONS MAY NOT APPLY TO YOU</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless EducApp Inc., its officers, directors, employees, 
              and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) 
              arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your use of the Platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of others</li>
              <li>Content you submit to the Platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Third-Party Links and Services</h2>
            <p>
              EducApp may contain links to third-party websites or resources. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>The availability or accuracy of such resources</li>
              <li>The content, products, or services of third parties</li>
              <li>Your interactions with third parties</li>
            </ul>
            <p className="mt-4">Links do not imply endorsement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Modifications to Terms</h2>
            <p>We may modify these Terms at any time. We will notify you of material changes by:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Posting notice on the Platform</li>
              <li>Sending email to your registered address</li>
              <li>In-app notification</li>
            </ul>
            <p className="mt-4">Continued use after changes constitutes acceptance of modified Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Modifications to Service</h2>
            <p>We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or discontinue the Platform (or any part) at any time</li>
              <li>Change features, content, or functionality</li>
              <li>We will provide reasonable notice of material changes when possible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Governing Law and Dispute Resolution</h2>
            <p>
              <strong>Governing Law:</strong> These Terms are governed by the laws of the State of Florida, United States, 
              without regard to conflict of law principles.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Dispute Resolution:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any disputes shall first be attempted to be resolved through good-faith negotiation</li>
              <li>If negotiation fails, disputes shall be resolved through binding arbitration in Tampa, Florida</li>
              <li>You agree to arbitrate on an individual basis only (no class actions)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">15. General Provisions</h2>
            <p><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and EducApp.</p>
            <p className="mt-4"><strong>Severability:</strong> If any provision is found invalid, the remaining provisions remain in effect.</p>
            <p className="mt-4"><strong>No Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver.</p>
            <p className="mt-4"><strong>Assignment:</strong> You may not assign these Terms. We may assign these Terms without restriction.</p>
            <p className="mt-4"><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Contact Us</h2>
            <p>For questions about these Terms:</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold">EducApp Inc.</p>
              <p>Email: educapp@educapp.us</p>
              <p>Website: educapp.us</p>
            </div>
            
            <p className="mt-6">For Copyright Issues:</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p>Email: educapp@educapp.us</p>
              <p>Subject: Copyright Notice</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">17. Children's Use</h2>
            <p>
              EducApp is designed for use by families with children under parental supervision. Parents are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Supervising their children's use of the Platform</li>
              <li>Ensuring appropriate use</li>
              <li>Reviewing content accessed by their children</li>
            </ul>
            <p className="mt-4">We do not knowingly collect information from children without parental consent.</p>
          </section>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
            <p className="text-center font-semibold">
              By using EducApp, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
