import type { Metadata } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FailedInspectionFix.com terms of service. Read our terms and conditions for using our lead matching service.",
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 sm:py-20 px-4" style={{ background: "#F8F6F1" }}>
        <article className="max-w-3xl mx-auto prose-custom">
          <h1 style={{ color: "#1C2A3A" }}>Terms of Service</h1>
          <p className="text-sm" style={{ color: "#6B7D8E" }}>
            Last Updated: May 1, 2026
          </p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the FailedInspectionFix.com
            website and services. By accessing or using our website, you agree to be bound by
            these Terms. If you do not agree, do not use our services.
          </p>

          <h2>1. Description of Service</h2>
          <p>
            FailedInspectionFix.com is an independent lead matching service. We connect home
            sellers, buyers, realtors, and property managers with certified environmental and
            plumbing mitigation specialists. <strong>We do not employ contractors directly.</strong> All
            mitigation work, certifications, inspections, and warranties are handled by the
            independent, licensed specialists in our network.
          </p>

          <h2>2. No Contractor-Client Relationship</h2>
          <p>
            FailedInspectionFix.com acts solely as an intermediary. When you submit your
            information through our website:
          </p>
          <ul>
            <li>We share your contact details and service requirements with one or more certified specialists in your area.</li>
            <li>The specialist(s) will contact you directly to discuss your project, provide estimates, and schedule work.</li>
            <li>Any agreement for services is between you and the specialist — not FailedInspectionFix.com.</li>
            <li>We do not guarantee the availability, pricing, quality, or timeliness of any specialist&apos;s work.</li>
          </ul>

          <h2>3. Consent to Contact</h2>
          <p>
            By submitting your information through our website, you expressly consent to be
            contacted by FailedInspectionFix.com and our specialist network via:
          </p>
          <ul>
            <li>Phone calls, including calls made using automated dialing systems or prerecorded messages.</li>
            <li>Text messages (SMS/MMS) regarding your service request.</li>
            <li>Email communications regarding your service request and related services.</li>
          </ul>
          <p>
            <strong>This consent is not a condition of any purchase.</strong> You may revoke your
            consent at any time by contacting us at privacy@failedinspectionfix.com or by
            replying STOP to any text message.
          </p>

          <h2>4. User Representations</h2>
          <p>By using our services, you represent and warrant that:</p>
          <ul>
            <li>You are at least 18 years of age.</li>
            <li>The information you provide is accurate, current, and complete.</li>
            <li>You have the legal authority to request services for the property in question (as owner, authorized agent, or licensed realtor).</li>
            <li>You will not use our services for any illegal or unauthorized purpose.</li>
          </ul>

          <h2>5. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate information about mitigation services, pricing
            ranges, and timelines on our website, this information is for general guidance only.
            Actual costs, timelines, and availability may vary based on your specific situation,
            location, and the specialist you work with. <strong>All estimates and pricing are
            provided by the individual specialists, not by FailedInspectionFix.com.</strong>
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, FailedInspectionFix.com and its officers,
            directors, employees, and agents shall not be liable for:
          </p>
          <ul>
            <li>Any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</li>
            <li>Any errors or omissions in the information provided on our website.</li>
            <li>Any acts, omissions, or conduct of any specialist in our network.</li>
            <li>Any loss of data, business interruption, or financial loss.</li>
            <li>Any damages arising from the quality, timeliness, or results of any mitigation work performed by specialists in our network.</li>
          </ul>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless FailedInspectionFix.com from any
            claims, damages, losses, liabilities, costs, and expenses (including attorney&apos;s fees)
            arising from your use of our services, your violation of these Terms, or your
            violation of any rights of a third party.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on FailedInspectionFix.com — including text, graphics, logos, images,
            and software — is the property of FailedInspectionFix.com or its licensors and is
            protected by copyright and trademark laws. You may not reproduce, distribute, or
            create derivative works from our content without written permission.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. We are not
            responsible for the content, privacy practices, or terms of any third-party sites.
            Your interactions with third-party sites are governed by their respective terms and
            privacy policies.
          </p>

          <h2>10. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or your use of our services shall be resolved
            through binding arbitration in accordance with the rules of the American Arbitration
            Association. The arbitration shall take place in the state where the property is
            located. You agree to waive any right to a jury trial or to participate in a class
            action lawsuit.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            United States and the state in which the service is provided, without regard to
            conflict of law principles.
          </p>

          <h2>12. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on
            this page with an updated &quot;Last Updated&quot; date. Your continued use of our
            services after any changes constitutes acceptance of the modified Terms.
          </p>

          <h2>13. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that
            provision shall be limited or eliminated to the minimum extent necessary, and the
            remaining provisions shall remain in full force and effect.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> legal@failedinspectionfix.com</li>
            <li><strong>Website:</strong> failedinspectionfix.com/contact</li>
          </ul>
        </article>
      </main>
      <Footer />

      <style>{`
        .prose-custom h1 { font-size: 2rem; margin-bottom: 0.5rem; font-weight: 700; }
        .prose-custom h2 { font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; font-weight: 700; color: #1C2A3A; }
        .prose-custom p { color: #3D566E; line-height: 1.75; margin-bottom: 1rem; font-size: 0.9375rem; }
        .prose-custom ul { margin-bottom: 1rem; padding-left: 1.5rem; list-style-type: disc; }
        .prose-custom li { color: #3D566E; line-height: 1.75; margin-bottom: 0.5rem; font-size: 0.9375rem; }
        .prose-custom strong { color: #1C2A3A; }
      `}</style>
    </>
  );
}
