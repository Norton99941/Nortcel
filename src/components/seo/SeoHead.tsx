import Head from "next/head";

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: string;
}

export function SeoHead({
  title = "NORTCEL MARKETING | Agencia de Marketing Digital",
  description = "Estrategias de marketing digital personalizadas que maximizan tu presencia online y aumentan tus conversiones.",
  canonicalUrl = "https://nortcelmarketing.com",
  ogType = "website",
  ogImage = "/images/nortcel-og-image.jpg",
  ogImageAlt = "NORTCEL MARKETING - Agencia de Marketing Digital",
  twitterCard = "summary_large_image",
}: SeoHeadProps) {
  return (
    <Head>
      {/* Metadatos principales */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Metadatos Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="NORTCEL MARKETING" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Metadatos Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@nortcelmarketing" />
      
      {/* Metadatos adicionales */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
    </Head>
  );
} 