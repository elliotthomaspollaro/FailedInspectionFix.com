import type { Metadata, Viewport } from "next";
import { Zilla_Slab, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* ─── Typography: Authoritative Slab Serif heading ─── */
const zillaSlab = Zilla_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

/* ─── Typography: Clean clinical body ─── */
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1C2A3A",
};

export const metadata: Metadata = {
  title: {
    default: "Failed Inspection? Get Clearance Before Closing | FailedInspectionFix.com",
    template: "%s | FailedInspectionFix.com",
  },
  description:
    "Failed home inspection blocking your closing? Get immediate quotes from certified radon, oil tank, asbestos, and sewer mitigation specialists. Save your escrow — get clearance fast.",
  keywords: [
    "failed home inspection",
    "escrow clearance",
    "radon mitigation",
    "oil tank removal",
    "asbestos abatement",
    "sewer scope repair",
    "failed inspection fix",
    "home inspection failed closing",
    "real estate inspection emergency",
  ],
  authors: [{ name: "FailedInspectionFix.com" }],
  creator: "FailedInspectionFix.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://failedinspectionfix.com",
    siteName: "FailedInspectionFix.com",
    title: "Failed Inspection? Get Clearance Before Closing | FailedInspectionFix.com",
    description:
      "Failed home inspection blocking your closing? Get immediate quotes from certified mitigation specialists. Save your escrow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Failed Inspection? Get Clearance Before Closing | FailedInspectionFix.com",
    description:
      "Failed home inspection blocking your closing? Get immediate quotes from certified mitigation specialists.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = "G-5DKWLLCBYP";

  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ─── GA4: G-5DKWLLCBYP ─── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://failedinspectionfix.com/#organization",
                  name: "FailedInspectionFix.com",
                  url: "https://failedinspectionfix.com",
                  description:
                    "We connect home sellers and realtors with certified environmental and plumbing mitigation specialists to resolve failed home inspections before closing.",
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    availableLanguage: "English",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://failedinspectionfix.com/#website",
                  url: "https://failedinspectionfix.com",
                  name: "FailedInspectionFix.com",
                  publisher: {
                    "@id": "https://failedinspectionfix.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://failedinspectionfix.com/?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
