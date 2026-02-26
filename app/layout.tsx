import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bret",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-20 p-4 md:p-12">
        {children}
        
        <Script id="chatbot-config" strategy="afterInteractive">
          {`window.chtlConfig = { chatbotId: "7334637871" }`}
        </Script>
        <Script 
          src="https://chatling.ai/js/embed.js" 
          data-id="7334637871" 
          id="chtl-script" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
