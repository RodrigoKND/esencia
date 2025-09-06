import { HeroSection } from '@/components/HeroSection';
import { BrandCarousel } from '@/components/BrandCarousel';
import { BestSellerSection } from '@/components/BestSellerSection';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { SEO } from '@/components/SEO';
import { useCategory } from "@/hooks/useCategory";

export const HomePage = () => {
  const { categories } = useCategory();
  const allNames = categories.map(c => c.nombre).join(', ');
  return (
    <div>
      <SEO
        title="Esencia - Catálogo de confianza"
        description={`Explora nuestro catálogo de productos de todo tipo: ${allNames}. Encuentra las mejores categorías y productos en Esencia | Natura, tu tienda en línea de confianza, con artículos de alta calidad diseñados para resaltar tu belleza natural.`}
        image_url={"https://esencia-two.vercel.app/homemart.webp"}
      />
      <HeroSection />
      <BrandCarousel />
      <BestSellerSection />
      <CategoryGrid />
      <FeaturedProducts />
    </div>
  );
};