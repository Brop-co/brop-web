import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL('https://brop.co.rw'),
    title: 'Brop - Creative Design Agency in Rwanda | Branding, Web Design & UI/UX',
    description: 'Brop is a leading creative design agency in Rwanda, specializing in branding, web design, UI/UX, and digital solutions. We create purposeful designs that drive business impact.',
    keywords: 'Brop, creative agency Rwanda, branding Rwanda, web design Rwanda, UI/UX design, digital agency Africa, creative studio, brand design, website development, graphic design Rwanda',
    authors: [{ name: 'Brop' }],
    creator: 'Brop',
    publisher: 'Brop',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://brop.co.rw',
        siteName: 'Brop',
        title: 'Brop - Creative Design Agency in Rwanda | Branding, Web Design & UI/UX',
        description: 'Brop is a leading creative design agency in Rwanda, specializing in branding, web design, UI/UX, and digital solutions. We create purposeful designs that drive business impact.',
        images: [
            {
                url: '/logo.svg',
                width: 1200,
                height: 630,
                alt: 'Brop Creative Agency - Rwanda\'s Premier Design Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brop - Creative Design Agency in Rwanda',
        description: 'Leading creative design agency in Rwanda specializing in branding, web design, and UI/UX solutions.',
        images: ['/logo.svg'],
        creator: '@bropagency',
        site: '@bropagency',
    },
    alternates: {
        canonical: 'https://brop.co.rw',
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
    category: 'Business',
    classification: 'Creative Agency',
    other: {
        'geo.region': 'RW',
        'geo.placename': 'Rwanda',
        'geo.position': '-1.9441;30.0619',
        'ICBM': '-1.9441, 30.0619',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#3827C7" />

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CreativeAgency",
                            "name": "Brop",
                            "alternateName": "Brop",
                            "description": "Leading creative design agency in Rwanda specializing in branding, web design, and UI/UX solutions.",
                            "url": "https://brop.co.rw",
                            "logo": "/logo.svg",
                            "image": "/og-image.jpg",
                            "sameAs": [
                                "https://twitter.com/bropagency",
                                "https://linkedin.com/company/brop",
                                "https://instagram.com/bropagency"
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "RW",
                                "addressRegion": "Rwanda"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -1.9441,
                                "longitude": 30.0619
                            },
                            "serviceArea": {
                                "@type": "Country",
                                "name": "Rwanda"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Creative Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Branding Design",
                                            "description": "Strategic brand identity and visual design"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Web Design",
                                            "description": "Modern, responsive website design and development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "UI/UX Design",
                                            "description": "User-centered interface and experience design"
                                        }
                                    }
                                ]
                            },
                            "foundingDate": "2024",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "availableLanguage": ["English", "Kinyarwanda"]
                            }
                        })
                    }}
                />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}
