import { Hotel, Organization, LocalBusiness, WebSite } from 'schema-dts';

export const getHotelSchema = () => {
  const schema: Hotel = {
    "@type": "Hotel",
    "@context": "https://schema.org",
    name: "Citra Digital Hotel",
    description: "Solusi website profesional untuk penginapan Anda dengan harga terjangkau. Dilengkapi AI Customer Service 24/7 dan fitur booking WhatsApp.",
    url: "https://citradigitalhotel.com",
    telephone: "+6285198526632",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lawu No. 123",
      addressLocality: "Karanganyar",
      addressRegion: "Jawa Tengah",
      postalCode: "57712",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.5983",
      longitude: "110.9515"
    },
    priceRange: "Rp499.000 - Rp2.000.000",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "AI Customer Service",
        value: true,
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          opens: "00:00",
          closes: "23:59"
        }
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WhatsApp Booking",
        value: true
      }
    ]
  };

  return schema;
};

export const getOrganizationSchema = () => {
  const schema: Organization = {
    "@type": "Organization",
    "@context": "https://schema.org",
    name: "Citra Digital Hotel",
    url: "https://citradigitalhotel.com",
    logo: "https://ik.imagekit.io/4hotelsolution/ChatGPT%20Image%20May%2022,%202025,%2005_35_44%20PM.webp?updatedAt=1747910289562",
    sameAs: [
      "https://www.facebook.com/people/Citra-DigitalHotel/61576269524386/",
      "https://www.instagram.com/citradigitalhotel/",
      "https://www.threads.net/@citradigitalhotel"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6285198526632",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "en"]
    }
  };

  return schema;
};

export const getLocalBusinessSchema = () => {
  const schema: LocalBusiness = {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    name: "Citra Digital Hotel",
    image: "https://ik.imagekit.io/4hotelsolution/ChatGPT%20Image%20May%2022,%202025,%2005_35_44%20PM.webp?updatedAt=1747910289562",
    description: "Jasa pembuatan website hotel dan AI customer service di Karanganyar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lawu No. 123",
      addressLocality: "Karanganyar",
      addressRegion: "Jawa Tengah",
      postalCode: "57712",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.5983",
      longitude: "110.9515"
    },
    url: "https://citradigitalhotel.com",
    telephone: "+6285198526632",
    priceRange: "Rp499.000 - Rp2.000.000"
  };

  return schema;
};

export const getWebsiteSchema = () => {
  const schema: WebSite = {
    "@type": "WebSite",
    "@context": "https://schema.org",
    name: "Citra Digital Hotel",
    url: "https://citradigitalhotel.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://citradigitalhotel.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return schema;
};