import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const SEO = ({ title, description, keywords }: SEOProps) => {
  return (
    <Helmet>
      <title>{title} | Vitta Micro Market</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={`${title} | Vitta Micro Market`} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={`${title} | Vitta Micro Market`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
