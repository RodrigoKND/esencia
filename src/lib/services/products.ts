import { supabase } from "@/model/createClient";
import { CreateProductData, Product, ProductFilters, ProductByCategory } from "@/types/database.types";

export const ProductService = {
    
    async productsOffer(filters?: ProductFilters): Promise<Product[]> {
        let query = supabase
            .from('v_productos_con_ofertas')
            .select('*');

        // Apply filters
        if (filters?.category) {
            query = query.eq('categoria_id', filters.category);
        }
        if (filters?.brand) {
            query = query.eq('marca_id', filters.brand);
        }
        if (filters?.onSale !== undefined) {
            query = query.eq('esta_en_oferta', filters.onSale);
        }
        if (filters?.featured !== undefined) {
            query = query.eq('es_destacado', filters.featured);
        }
        if (filters?.search) {
            query = query.ilike('nombre', `%${filters.search}%`);
        }
        if (filters?.minPrice !== undefined) {
            query = query.gte('precio_actual', filters.minPrice);
        }
        if (filters?.maxPrice !== undefined) {
            query = query.lte('precio_actual', filters.maxPrice);
        }
        if (filters?.limit) {
            query = query.limit(filters.limit);
        }
        if (filters?.offset) {
            query = query.range(filters.offset, (filters.offset + (filters.limit || 10)) - 1);
        }

        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    },

    async fetchProducts(): Promise<Product[] | []> {
        const { data, error } = await supabase
            .from('productos')
            .select(`
                id,
                nombre, descripcion, categoria_id, activo,
                cantidad, precio_base, moneda, imagen_url, esta_en_oferta, es_destacado,
                created_at, updated_at,
                marcas(nombre)
                `)
            .eq('activo', true)
            .order('nombre');

        if (error) throw error;

        return (data ?? []).map((item): Product => ({
            ...item,
            marcas: Array.isArray(item.marcas)
                ? item.marcas[0]
                : item.marcas ?? { nombre: "Genérico" },
        }));

    },

    async createProduct(product: CreateProductData): Promise<Product | null> {
        const { data, error } = await supabase
            .from('productos')
            .insert([product])
            .select()
            .single();

        if (error) throw error;

        return data;
    },

    async updateProduct(id: string, name: string, description?: string): Promise<Product | null> {
        const { data, error } = await supabase
            .from('productos')
            .update({ nombre: name, descripcion: description })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return data;
    },

    async deleteProduct(id: string): Promise<Product | null> {
        const { data, error } = await supabase
            .from('productos')
            .delete()
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return data;
    },

 async fetchProductById(id: string): Promise<Product> {
  const { data, error } = await supabase
    .from("productos")
    .select(`
      *,
      marcas (nombre),
      categorias (nombre),
      ofertas!ofertas_producto_id_fkey (
        precio_final,
        precio_especial,
        valor_descuento,
        tipo_oferta,
        activa,
        fecha_inicio,
        fecha_fin
      )
    `)
    .eq("id", id)
    .single();

  if (error) throw error;

  return {
    ...data,
    marcas: Array.isArray(data?.marcas)
      ? data.marcas[0]
      : data?.marcas ?? { nombre: "Genérico" },
    categorias: Array.isArray(data?.categorias)
      ? data.categorias[0]
      : data?.categorias ?? { nombre: "" },
    ofertas: Array.isArray(data?.ofertas)
      ? data.ofertas
      : data?.ofertas
      ? [data.ofertas]
      : [],
  };


  return {
    ...data,
    // normalizar marca
    marcas: Array.isArray(data?.marcas)
      ? data.marcas[0]
      : data?.marcas ?? { nombre: "Genérico" },
    // normalizar categoría
    categorias: Array.isArray(data?.categorias)
      ? data.categorias[0]
      : data?.categorias ?? { nombre: "" },
  };
},

    
    async fetchProductsByCategory(): Promise<ProductByCategory[] | []> {
        const { data, error } = await supabase
            .from('productos')
            .select('id, nombre, descripcion, activo, precio_base, moneda, imagen_url, esta_en_oferta, es_destacado, categorias(nombre), cantidad, created_at, updated_at')
            .order('cantidad', { ascending: false })

        if (error) throw error

        return (data ?? []).map((item): ProductByCategory => ({
            ...item,
            categoria: Array.isArray(item?.categorias)
                ? item?.categorias[0]?.nombre
                : item?.categorias ?? "",
        }));
    },
    

};