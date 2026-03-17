import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iaradanila.com.ar"),
  title: {
    default: "Iara Danila | Psicóloga Online y Presencial en Córdoba Capital",
    template: "%s | Iara Danila Psicóloga",
  },
  description:
    "Psicóloga especialista en Trauma y Terapia ACT en Córdoba Capital y Online para toda Argentina. Acompañamiento profesional, cercano y transformador. Pedí tu turno.",
  keywords: [
    "psicóloga online Argentina",
    "terapia ACT Córdoba Capital",
    "tratamiento trauma Córdoba",
    "psicóloga Iara Danila",
    "psicología online Córdoba",
    "terapia aceptación y compromiso",
    "trauma psicología",
    "turnos psicólogo online",
  ],
  authors: [{ name: "Iara Danila", url: "https://www.iaradanila.com.ar" }],
  creator: "Iara Danila",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.iaradanila.com.ar",
    siteName: "Iara Danila Psicóloga",
    title: "Iara Danila | Psicóloga Online y Presencial en Córdoba Capital",
    description:
      "Especialista en Trauma y Terapia ACT. Atención online para toda Argentina y presencial en Córdoba Capital.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iara Danila – Psicóloga Especialista en Trauma y ACT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iara Danila | Psicóloga Online y Presencial en Córdoba",
    description: "Especialista en Trauma y Terapia ACT. Online para toda Argentina.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.iaradanila.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Iara Danila – Psicóloga",
              description:
                "Psicóloga especialista en Trauma y Terapia ACT en Córdoba Capital y online.",
              url: "https://www.iaradanila.com.ar",
              telephone: "+54-351-519-7687",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Córdoba Capital",
                addressLocality: "Córdoba",
                addressRegion: "Córdoba",
                postalCode: "5000",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -31.4201,
                longitude: -64.1888,
              },
              openingHours: "Mo-Fr 09:00-19:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
