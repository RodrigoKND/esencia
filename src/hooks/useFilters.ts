import { useState, useMemo } from "react";

export const useFilters = (products) => {
  const [filters, setFilters] = useState({
    marca: [],
    categoria: [],
    precio: { min: 0, max: 0 },
    busqueda: "",
  });

  const filteredProducts = useMemo(() => {
    return products?.filter((product) => {
      // --- Filtro por marca ---
      if (
        filters.marca.length > 0 &&
        !filters.marca.includes(product?.marcas?.nombre)
      ) {
        return false;
      }

      // --- Filtro por categoría ---
      if (
        filters.categoria.length > 0 &&
        !filters.categoria.includes(product?.categoria_nombre)
      ) {
        return false;
      }

      // --- Filtro por precio ---
      if (
        (filters.precio.min > 0 && product?.precio < filters.precio.min) ||
        (filters.precio.max > 0 && product?.precio > filters.precio.max)
      ) {
        return false;
      }

      // --- Filtro por búsqueda ---
      if (filters.busqueda) {
        const searchLower = filters.busqueda.toLowerCase();
        const matchesName = product?.nombre?.toLowerCase().includes(searchLower);
        const matchesBrand = product?.marcas?.nombre
          ?.toLowerCase()
          .includes(searchLower);
        const matchesCategory = product?.categoria_nombre
          ?.toLowerCase()
          .includes(searchLower);

        if (!matchesName && !matchesBrand && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [products, filters]);

  // --- Nuevo updateFilters con toggle automático ---
const updateFilters = (newFilters) => {
  setFilters((prev) => ({
    marca: newFilters.marca
      ? Array.isArray(newFilters.marca)
        ? newFilters.marca
        : [...prev.marca, newFilters.marca]
      : prev.marca,

    categoria: newFilters.categoria
      ? Array.isArray(newFilters.categoria)
        ? newFilters.categoria
        : [...prev.categoria, newFilters.categoria]
      : prev.categoria,

    precio: newFilters.precio ?? prev.precio,

    busqueda:
      typeof newFilters.busqueda === "string"
        ? newFilters.busqueda
        : prev.busqueda,
  }));
};


  const clearFilters = () => {
    setFilters({
      marca: [],
      categoria: [],
      precio: { min: 0, max: 0 },
      busqueda: "",
    });
  };

  return {
    filters,
    filteredProducts,
    updateFilters,
    clearFilters,
  };
};
