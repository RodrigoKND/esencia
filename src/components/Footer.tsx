import { useCategory } from "@/hooks/useCategory";
import { Link } from "react-router-dom";

export function Footer() {
  const { categories } = useCategory();

  return (
    <footer className="bg-pink-100 border-t border-gray-100">
      <div className="container mx-auto p-9 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <h4 className="text-xl font-bold flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              <svg className="w-6 h-6 text-pink-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd" />
              </svg>
              Esencia
            </h4>
          </div>
          <p className="text-gray-600 text-sm">
            Tu destino para cosméticos de alta calidad. Descubre lo mejor en cuidado de la piel, maquillaje y bienestar personal.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Categorías</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/catalog?category=${encodeURIComponent(category.nombre)}`}
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  {category.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 flex flex-col">
          <h3 className="font-semibold text-gray-800">Contacto</h3>
          <a href="mailto:saydarodriguez603@gmail.com"
            target="_blank"
            rel="noreferrer" className="text-gray-600 text-sm cursor-pointer hover:text-pink-700">saydarodriguez603@gmail.com</a>
          <a href="https://wa.me/+59174327882?text='Hola, estoy viendo los productos que vende quiero saber más, me interesan'" rel="noopener, noreferrer" target="_blank" className="text-gray-600 text-sm cursor-pointer hover:text-pink-700">Tel: +591 74327882</a>
          <p className="text-gray-600 text-sm">Cochabamba, Bolivia</p>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-8 pt-4 text-center text-sm text-gray-600">
        <p>Tienda Esencia © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
