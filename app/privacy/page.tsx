import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-foreground">EducApp Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p className="text-sm text-muted-foreground">Last Updated: November 13, 2025</p>
          
          <p>
            EducApp Inc. ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we 
            collect, use, disclose, and protect information when you use EducApp.us (the "Platform").
          </p>
          
          <p className="font-semibold">
            By using EducApp, you agree to this Privacy Policy. If you do not agree, please do not use the Platform.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Privacy</h2>
            <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary/20 space-y-3">
              <p className="font-semibold">We DO NOT share user conversations or questions with third parties for marketing purposes.</p>
              <p className="font-semibold">We DO NOT train AI models on your family's private educational data.</p>
              <p className="font-semibold">We DO secure all data with industry-standard encryption and security measures.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Account Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Family information (number of children, ages, grade levels)</li>
              <li>Subscription and payment information</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Questions asked to the AI tutor</li>
              <li>Educational content accessed</li>
              <li>Time spent on Platform</li>
              <li>Features used</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Student Progress Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subjects studied</li>
              <li>Learning patterns</li>
              <li>Educational progress metrics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">To Provide Services:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver AI tutoring and educational content</li>
              <li>Personalize learning experiences</li>
              <li>Track educational progress</li>
              <li>Respond to your questions and support requests</li>
              <li>Process payments and subscriptions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">To Improve Services:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyze usage patterns (in aggregate form)</li>
              <li>Improve AI tutoring quality</li>
              <li>Develop new features</li>
              <li>Fix technical issues</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">To Communicate:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send service-related announcements</li>
              <li>Provide customer support</li>
              <li>Send educational resources and tips (with your consent)</li>
              <li>Notify you of changes to our services</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">For Security and Legal Compliance:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prevent fraud and abuse</li>
              <li>Enforce our Terms of Use</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
            <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/20 my-6">
              <p className="font-semibold text-lg">We DO NOT sell your personal information.</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">We May Share Information With:</h3>
            
            <p className="font-semibold mt-4">Service Providers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cloud hosting providers (for data storage)</li>
              <li>Payment processors (for subscription billing)</li>
              <li>Email service providers (for communications)</li>
              <li>Analytics providers (aggregate data only)</li>
            </ul>
            <p className="mt-4">All service providers are contractually required to protect your data and use it only for specified purposes.</p>
            
            <p className="font-semibold mt-6">Legal Requirements:</p>
            <p>We may disclose information if required by law, court order, or government request, or to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Comply with legal processes</li>
              <li>Protect our rights and property</li>
              <li>Prevent fraud or illegal activity</li>
              <li>Protect safety of users or public</li>
            </ul>
            
            <p className="font-semibold mt-6">Business Transfers:</p>
            <p>If EducApp is acquired or merged, user information may be transferred to the new entity. You will be notified of any such change.</p>
            
            <p className="font-semibold mt-6">With Your Consent:</p>
            <p>We may share information in other circumstances with your explicit permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Security Measures:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Industry-standard encryption (SSL/TLS) for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            
            <p className="mt-6"><strong>No Guarantee:</strong> While we implement strong security measures, no system is 100% secure. We cannot guarantee absolute security.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Your Responsibility:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep your password confidential</li>
              <li>Log out after using shared devices</li>
              <li>Notify us immediately of unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We Retain Your Data:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>For as long as your account is active</li>
              <li>As needed to provide services</li>
              <li>As required by law</li>
              <li>For legitimate business purposes</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">You May Request:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account deletion at any time</li>
              <li>Data export (where technically feasible)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">After Deletion:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We delete or anonymize your data within 90 days</li>
              <li>Some data may be retained in backups for a limited time</li>
              <li>Aggregated, anonymized data may be retained indefinitely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Privacy Rights</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">You Have the Right To:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Export your data (where feasible)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent</li>
            </ul>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold">To Exercise Rights:</p>
              <p>Email us at: educapp@educapp.us</p>
              <p>We will respond within 30 days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Parental Consent:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>EducApp is designed for family use under parental supervision</li>
              <li>Parents create accounts and supervise children's use</li>
              <li>We collect information about children only with parental consent</li>
              <li>Parents control their children's access and use</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Parents May:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review their child's information</li>
              <li>Request deletion of their child's information</li>
              <li>Refuse further collection of their child's information</li>
            </ul>
            
            <p className="mt-6"><strong>COPPA Compliance:</strong> We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children without verifiable parental consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We Use:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies (required for Platform functionality)</li>
              <li>Analytics cookies (to understand usage patterns)</li>
              <li>Preference cookies (to remember your settings)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">You May:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Control cookies through browser settings</li>
              <li>Note that disabling cookies may limit Platform functionality</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Cookies:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Some third-party service providers may use cookies</li>
              <li>We do not control third-party cookies</li>
              <li>Review third-party privacy policies for details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Email Communications</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We Send:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service announcements (account-related, required)</li>
              <li>Educational resources (optional, with consent)</li>
              <li>Product updates (optional, with consent)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">You May:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unsubscribe from optional emails via the unsubscribe link</li>
              <li>You cannot unsubscribe from essential service communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. International Users</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Data Location:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>EducApp is based in the United States</li>
              <li>Your data is stored on servers in the United States</li>
              <li>By using EducApp, you consent to transfer of data to the United States</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">International Rights:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>If you are outside the United States, you may have additional privacy rights</li>
              <li>Contact us at educapp@educapp.us for assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. California Privacy Rights</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">California Residents Have the Right To:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Know what personal information is collected</li>
              <li>Know if personal information is sold or disclosed</li>
              <li>Opt-out of sale of personal information</li>
              <li>Access personal information</li>
              <li>Delete personal information</li>
              <li>Non-discrimination for exercising privacy rights</li>
            </ul>
            
            <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/20 my-6">
              <p className="font-semibold text-lg">We Do Not Sell Personal Information.</p>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold">To Exercise Rights:</p>
              <p>Email: educapp@educapp.us</p>
              <p>Subject: California Privacy Request</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Privacy Policy</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">We May Update This Policy:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will notify you of material changes</li>
              <li>Notice will be provided via email or Platform announcement</li>
              <li>Continued use after changes constitutes acceptance</li>
            </ul>
            
            <p className="mt-6"><strong>Review Regularly:</strong> Check this page periodically for updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Third-Party Links</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Our Platform May Link To:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>External websites</li>
              <li>Third-party resources</li>
              <li>Educational tools</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">We Are Not Responsible For:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Privacy practices of third parties</li>
              <li>Content of external sites</li>
            </ul>
            
            <p className="mt-4">Review third-party privacy policies before providing information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Us</h2>
            <p>Privacy Questions or Concerns:</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold">EducApp Inc.</p>
              <p>Email: educapp@educapp.us</p>
              <p>Website: educapp.us</p>
            </div>
            
            <p className="mt-6">For Privacy Requests:</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p>Email: educapp@educapp.us</p>
              <p>Subject: Privacy Request</p>
              <p className="mt-2 text-sm">We will respond within 30 days.</p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
            <p className="text-center font-semibold">
              By using EducApp, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
