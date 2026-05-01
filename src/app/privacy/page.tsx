import type { Metadata } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FailedInspectionFix.com privacy policy. Learn how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 sm:py-20 px-4" style={{ background: "#F8F6F1" }}>
        <article className="max-w-3xl mx-auto prose-custom">
          <h1 style={{ color: "#1C2A3A" }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: "#6B7D8E" }}>
            Last Updated: May 1, 2026
          </p>

          <p>
            FailedInspectionFix.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website and use our lead matching services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you use our services, including:</p>
          <ul>
            <li><strong>Contact Information:</strong> First name, email address, and phone number.</li>
            <li><strong>Property Information:</strong> ZIP code of the property requiring service.</li>
            <li><strong>Service Details:</strong> Type of inspection issue (radon, oil tank, asbestos, sewer), your role in the transaction (seller, buyer, realtor, property manager), and closing timeline.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device type, referring URL, pages visited, and cookies.</li>
            <li><strong>Marketing Data:</strong> UTM parameters and campaign source information.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Match you with certified, licensed mitigation specialists in your area.</li>
            <li>Share your contact and service information with our specialist network so they can provide quotes and schedule assessments.</li>
            <li>Communicate with you about your service request via phone, email, and text message.</li>
            <li>Improve our website, services, and user experience.</li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We share your information with the following categories of third parties:
          </p>
          <ul>
            <li><strong>Mitigation Specialists:</strong> We share your name, phone number, email, ZIP code, and service details with certified contractors in our network who can provide quotes for your specific issue.</li>
            <li><strong>Lead Aggregation Partners:</strong> We may share your information with third-party lead networks (such as ServiceDirect, PX, and Networx) who connect consumers with service providers.</li>
            <li><strong>Analytics Providers:</strong> We use Google Analytics to understand website usage. Google may collect and process data about your browsing activity.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information when required by law, subpoena, or to protect our rights.</li>
          </ul>

          <h2>4. Telephone Consumer Protection Act (TCPA) Consent</h2>
          <p>
            By submitting your information through our website, you provide your prior express written
            consent for FailedInspectionFix.com and its certified specialist network to contact you
            at the phone number you provided. This consent covers:
          </p>
          <ul>
            <li>Phone calls (including those made using an automatic telephone dialing system or prerecorded voice).</li>
            <li>Text messages (including SMS and MMS) regarding your mitigation service request.</li>
            <li>You understand that consent is not a condition of purchasing any goods or services.</li>
            <li>Standard message and data rates may apply.</li>
            <li>You may revoke your consent at any time by contacting us at the information below.</li>
          </ul>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies, web beacons, and similar technologies to collect usage data, remember
            your preferences, and improve our services. You can control cookies through your
            browser settings, but disabling cookies may affect website functionality.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement commercially reasonable security measures to protect your personal
            information, including SSL/TLS encryption for all data transmissions. However, no
            method of electronic transmission or storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes
            described in this Privacy Policy, unless a longer retention period is required by law.
            Lead data is typically retained for 24 months after collection.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
            <li><strong>Opt-Out:</strong> Opt out of receiving marketing communications at any time.</li>
            <li><strong>Do Not Sell:</strong> California residents may request that we do not sell their personal information.</li>
          </ul>

          <h2>9. California Privacy Rights (CCPA)</h2>
          <p>
            If you are a California resident, you have additional rights under the California
            Consumer Privacy Act (CCPA), including the right to know what personal information
            we collect, the right to delete your information, and the right to opt out of the
            sale of your personal information. To exercise these rights, contact us using the
            information below.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children. If we learn that we have collected
            information from a child under 18, we will promptly delete that information.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the
            &quot;Last Updated&quot; date.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your rights,
            please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> privacy@failedinspectionfix.com</li>
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
