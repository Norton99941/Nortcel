// Este componente ya no es necesario en Next.js App Router
// La metadata se maneja directamente en los archivos layout.tsx y page.tsx
// Ver: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

// Archivado para referencia, pero no se debe usar en la App Router
export interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: string;
}

// Este componente está obsoleto para la App Router, no usar
export const SeoHead = null; 