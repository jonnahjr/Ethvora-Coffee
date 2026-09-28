import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

// Site URL can be overridden (e.g. to a tunnel URL) so share-preview
// images resolve to a host that is actually reachable.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ethvoracoffee.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ethvora Coffee | Ethiopian Specialty Coffee & Export',
  description:
    'Ethvora Coffee connects specialty Ethiopian Arabica from highland origins including Guji, Yirgacheffe, and Sidama with global coffee buyers, roasters, cafés, and specialty markets.',
  keywords:
    'Ethiopian specialty coffee, Ethiopian coffee exporter, Ethiopian green coffee, Ethiopian Arabica, Guji coffee, Yirgacheffe coffee, Sidama coffee, Ethiopian coffee supplier, Ethiopian micro lots, specialty coffee Ethiopia, coffee exporter Ethiopia',
  openGraph: {
    title: 'Ethvora Coffee | Ethiopian Specialty Coffee & Export',
    description:
      'Single-origin Ethiopian Arabica, grown at high elevations, carefully processed at origin, and connected to specialty coffee markets around the world.',
    url: 'https://ethvoracoffee.com',
    siteName: 'Ethvora Coffee',
    images: [{ url: '/77.png', width: 1200, height: 1200, alt: '77 Coffee — Ethvora' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethvora Coffee | Ethiopian Specialty Coffee & Export',
    description:
      'Single-origin Ethiopian Arabica from highland origins. Guji, Yirgacheffe, Sidama — for specialty roasters, importers & cafés worldwide.',
    images: ['/77.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ethvoracoffee.com' },
  icons: {
    icon: [
      { url: '/77.png', type: 'image/png', sizes: 'any' },
    ],
    shortcut: ['/77.png'],
    apple: [{ url: '/77.png', sizes: '180x180' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1008" />
        <meta property="og:logo" content="/77.png" />
        <meta property="og:image:alt" content="77 Coffee — Ethvora" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  )
}
