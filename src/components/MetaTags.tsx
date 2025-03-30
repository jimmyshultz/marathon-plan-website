import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function MetaTags({
  title = 'Marathon Training Plans',
  description = 'Structured 12-week marathon training plans for 3, 4, and 5-hour goal times based on Jack Daniels\' methodology',
  canonicalUrl = 'https://www.marathontrainingplans.com',
  ogImage = '/og-image.jpg',
}: MetaTagsProps) {
  const fullTitle = `${title} | Marathon Training Plans`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Marathon Training Plans" />
      <meta name="keywords" content="marathon training, running plan, marathon schedule, Jack Daniels, marathon training plan, 3 hour marathon, 4 hour marathon, 5 hour marathon" />
    </Head>
  );
} 