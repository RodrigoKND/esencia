import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description: string;
    image_url?: string;
}

export function SEO({ title = "Esencia - Catálogo de confianza", description, image_url }: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image_url} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://esencia-natura.vercel.app" />
            <meta property="twitter:url" content="https://esencia-natura.vercel.app" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image_url} />
        </Helmet>
    );
}
