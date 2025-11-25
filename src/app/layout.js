import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Waly - Il tuo patrimonio sotto controllo",
  description: "La piattaforma completa per tracciare, analizzare e far crescere il tuo patrimonio personale. Integrazione con broker, analytics avanzate, FIRE tracking.",
  keywords: "wealth management, portfolio tracking, FIRE, net worth, investimenti, broker integration",
  authors: [{ name: "Waly" }],
  openGraph: {
    title: "Waly - Il tuo patrimonio sotto controllo",
    description: "La piattaforma completa per tracciare e analizzare il tuo patrimonio personale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waly - Il tuo patrimonio sotto controllo",
    description: "La piattaforma completa per tracciare e analizzare il tuo patrimonio personale",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
