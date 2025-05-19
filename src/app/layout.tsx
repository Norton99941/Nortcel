import "@/app/globals.css";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NORTCEL MARKETING | Agencia de Marketing Digital",
  description: "Agencia especializada en estrategias de marketing digital personalizadas que maximizan tu presencia online y aumentan tus conversiones. SEO, SEM, Redes Sociales y más.",
  keywords: ["marketing digital", "SEO", "publicidad digital", "redes sociales", "email marketing", "agencia marketing", "estrategia digital"],
  authors: [{ name: "NORTCEL MARKETING", url: "https://nortcelmarketing.com" }],
  creator: "NORTCEL MARKETING",
  publisher: "NORTCEL MARKETING",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nortcelmarketing.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/images/favicon.png' }
    ],
    apple: [
      { url: '/images/favicon.png' }
    ]
  },
  openGraph: {
    title: "NORTCEL MARKETING | Transformamos tu Negocio en el Mundo Digital",
    description: "Estrategias de marketing digital personalizadas que impulsan tu presencia online, aumentan conversiones y mejoran el ROI de tu inversión.",
    url: "https://nortcelmarketing.com",
    siteName: "NORTCEL MARKETING",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/favicon.png",
        width: 256,
        height: 256,
        alt: "NORTCEL MARKETING - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NORTCEL MARKETING | Agencia de Marketing Digital",
    description: "Estrategias de marketing digital personalizadas que maximizan tu presencia online y aumentan tus conversiones.",
    images: ["/images/favicon.png"],
    creator: "@nortcelmarketing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col w-full">
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
