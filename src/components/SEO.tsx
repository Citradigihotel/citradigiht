import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getHotelSchema, getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema } from './SchemaMarkup';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = 'https://citradigitalhotel.com',
  type = 'website',
  name = 'Citra Digital Hotel',
  image = 'https://ik.imagekit.io/4hotelsolution/ChatGPT%20Image%20May%2022,%202025,%2005_35_44%20PM.webp?updatedAt=1747910289562',
  schema
}) => {
  const fullTitle = `${title} | ${name}`;
  
  // Combine all schema markup
  const schemas = [
    getHotelSchema(),
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebsiteSchema(),
    ...(schema ? [schema] : [])
  ];
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Additional meta tags */}
      <meta name="keywords" content="website hotel murah, jasa pembuatan website hotel, website penginapan, ai customer service hotel, landing page hotel, branding hotel, website hotel profesional, digital marketing hotel, hotel karanganyar, penginapan karanganyar, hotel jawa tengah" />
      <meta name="author" content="Citra Digital Hotel" />
      <meta name="language" content="id" />
      <meta name="geo.region" content="ID-JT" />
      <meta name="geo.placename" content="Karanganyar" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
};

export default SEO;