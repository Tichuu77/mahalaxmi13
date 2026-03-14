import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mahalaxmi Infra",
  description: "Mahalaxmi Infra - NMRDA & RL Residential Plotted Project",
  generator: "v0.app",
  icons: {
    icon: "/Mahalaxmi Infra new Logo.png",
  },
  keywords: [
    "Mahalaxmi Infra",
    "Mahalaxmi Infra Nagpur Projects",
    "Property in Nagpur for sale",
    "Best real estate developers in Nagpur",
    "Residential plots in Nagpur",
    "NMRDA Sanctioned Plots",
    "RERA Approved Projects",
    "Commercial Plots in Nagpur",
    "Plots near Samruddhi Mahamarg",
    "Investment near Nagpur Expressway",
    "Samruddhi Mahamarg entrance plots",
    "Investment plots near Samruddhi Mahamarg",
    "Samruddhi Circle Plots",
    "Plots near MIHAN Nagpur",
    "Residential plots in Jamtha",
    "Property near Wardha Road",
    "Plots near VCA Stadium Jamtha",
    "Wardha Road Plots",
    "Jamtha Plots",
    "Gated community plots in Jamtha Nagpur",
    "Ready to construct plots near Wardha Road",
    "NMRDA plots in Koradi Road",
    "Residential property near Koradi Temple",
    "2 BHK 3 BHK plots Koradi",
    "Koradi Road Plots",
    "Plots in Katol Road Nagpur",
    "Future investment plots Katol Road",
    "Affordable plots Nagpur West",
    "Katol Road Plots",
    "Industrial and Residential plots Umred Road",
    "Plots near Dighori Umred Road",
    "Low cost plots in Nagpur",
    "Umred Road Plots",
    "Besa Plots",
    "Beltarodi Plots",
    "Shankarpur Plots",
    "Prime Locations in Nagpur",
    "Best plots for investment in Nagpur 2026",
    "NMRDA sanctioned plots with bank loan facility",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        
        {/* Google Ads / Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17935410850"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17935410850');
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}