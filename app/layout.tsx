import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shubhradia.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/self-confidence.png',
    apple: '/self-confidence.png',
  },
  title: {
    default: 'Shubh Radia - Product Manager in India',
    template: '%s | Shubh Radia',
  },
  description:
    'Shubh Radia is a product manager in India building enterprise SaaS for logistics. 0 to 1 products at Taabi Mobility, ex-HyperVerge APM, founder of a Rs 3L+/month agency.',
  keywords: [
    'Shubh Radia',
    'Shubh Radia product manager',
    'product manager',
    'product manager India',
    'product managers in India',
    'product manager portfolio',
    'enterprise SaaS product manager',
    'B2B product manager India',
    'associate product manager India',
    'product manager Mumbai',
    'logistics product manager',
    'Taabi Mobility',
    'HyperVerge APM',
  ],
  authors: [{ name: 'Shubh Radia', url: siteUrl }],
  creator: 'Shubh Radia',
  publisher: 'Shubh Radia',
  applicationName: 'Shubh Radia Portfolio',
  category: 'Product Management',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Shubh',
    lastName: 'Radia',
    username: 'shubhradia',
    title: 'Shubh Radia - Product Manager in India',
    description:
      'Product manager building enterprise SaaS for logistics. 0 to 1 products at Taabi Mobility, ex-HyperVerge APM, founder of a Rs 3L+/month agency.',
    url: siteUrl,
    siteName: 'Shubh Radia',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubh Radia - Product Manager in India',
    description:
      'Product manager building enterprise SaaS for logistics. 0 to 1 products at Taabi Mobility, ex-HyperVerge APM.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e8',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Shubh Radia',
      givenName: 'Shubh',
      familyName: 'Radia',
      jobTitle: 'Product Manager',
      description:
        'Product manager in India building enterprise SaaS for logistics operations, focused on turning complex workflows into systems people can actually use.',
      url: siteUrl,
      email: 'mailto:shubhradia33@gmail.com',
      telephone: '+91-75069-77922',
      nationality: { '@type': 'Country', name: 'India' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Taabi Mobility',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'K.J. Somaiya College of Engineering',
      },
      knowsAbout: [
        'Product Management',
        'Enterprise SaaS',
        'Product Discovery',
        'Roadmapping and Prioritization',
        'Workflow Design',
        'Logistics Technology',
        'B2B Product Strategy',
      ],
      sameAs: [
        'https://www.linkedin.com/in/shubhradia',
        'https://github.com/shubhthenoob',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Shubh Radia - Product Manager',
      description:
        'Portfolio of Shubh Radia, a product manager in India building enterprise products.',
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Shubh Radia - Product Manager in India',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      mainEntity: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-IN',
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className="bg-background">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
