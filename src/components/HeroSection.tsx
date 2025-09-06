import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Transforma tu
              <br />
              <span className="text-pink-600">
                Cuidado Personal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Productos premium para tu cuidado personal. Encuentra lo mejor para ti y elige calidad en cada detalle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <Link to="/catalog"
            >
              <div
                className="bg-gradient-to-r flex items-center from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </Link>
            <a href="#categories"
            >
              <div
                className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent border border-input shadow-sm px-8 py-4 text-lg rounded-full duration-300">
                Ver Categorias
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-pulse delay-300"></div>
      <div className="absolute -z-40 md:z-0 top-1/2 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-pulse delay-700"></div>
    </section>
  );
};