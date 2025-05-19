import "@/app/globals.css";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NORTCEL MARKETING",
  description: "Transformamos negocios con estrategias digitales efectivas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
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
