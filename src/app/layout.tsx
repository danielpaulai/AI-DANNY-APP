import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Rethink_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import AuthNav from "@/components/shell/AuthNav";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Danny | Purely Personal Branding",
  description:
    "Premium expert system for Purely Personal Branding clients. Danny's methodology, applied to your business.",
};

export const viewport: Viewport = {
  themeColor: "#e90d41",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rethink.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <ClerkProvider>
          <AuthNav />
          <div className="grain" />
          {children}
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  "!bg-[var(--dark-card)] !border-[var(--dark-border)] !text-white",
              },
            }}
          />
        </ClerkProvider>
      </body>
    </html>
  );
}
