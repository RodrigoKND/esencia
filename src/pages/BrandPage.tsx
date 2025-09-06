import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { ProductGrid } from '@/components/ProductGrid';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import { useCategory } from '@/hooks/useCategory';

export const BrandPage = () => {
  const { name } = useParams<{ name: string }>();
  const {categories} = useCategory();
  const decodedName = decodeURIComponent(name || '');
  
  const brandProducts = products.filter(
    product => product.brand.toLowerCase() === decodedName.toLowerCase()
  );

  // Group products by category
  const productsByCategory = categories.reduce((acc, category) => {
    const categoryProducts = brandProducts.filter(product => product.category === category);
    if (categoryProducts.length > 0) {
      acc[category] = categoryProducts;
    }
    return acc;
  }, {} as Record<string, typeof products>);
  useEffect(()=> window.scrollTo(0,0))
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <div className="px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="h-8 w-8 mr-2" />
          </Link>
        </div>

        {/* Brand Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏷️</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Productos {decodedName}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre toda nuestra colección de {decodedName}, organizados por categorías 
              para que encuentres exactamente lo que buscas.
            </p>
            <div className="flex justify-center mt-6">
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 rounded-full px-6 py-2">
                {brandProducts.length} productos disponibles
              </Badge>
            </div>
          </div>
        </div>

        {brandProducts.length > 0 ? (
          <div className="space-y-12">
            {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
              <div key={category} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {category}
                  </h2>
                  <p className="text-gray-600">
                    {categoryProducts.length} productos en esta categoría
                  </p>
                </div>
                <ProductGrid products={categoryProducts} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">😔</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No se encontraron productos para "{decodedName}"
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Intenta buscar otra marca o explora nuestro catálogo completo para 
              descubrir productos increíbles.
            </p>
            <Link to="/catalog">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Ver Catálogo Completo
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};