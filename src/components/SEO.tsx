'use client';

import React from 'react';
import { NextSeo } from 'next-seo';
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
    <NextSeo
      title={fullTitle}
      description={description}
      canonical={canonical}
      openGraph={{
        title: fullTitle,
        description,
        type,
        url: canonical,
        images: [{ url: image }],
        siteName: name,
        locale: 'id_ID',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: 'website hotel murah, jasa pembuatan website hotel, website penginapan, ai customer service hotel, landing page hotel, branding hotel, website hotel profesional, digital marketing hotel, hotel karanganyar, penginapan karanganyar, hotel jawa tengah'
        },
        {
          name: 'author',
          content: 'Citra Digital Hotel'
        },
        {
          name: 'language',
          content: 'id'
        },
        {
          name: 'geo.region',
          content: 'ID-JT'
        },
        {
          name: 'geo.placename',
          content: 'Karanganyar'
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]}
    />
  );
};

export default SEO;