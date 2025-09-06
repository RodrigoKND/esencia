import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductWithOffer {
  nombre: string;
  precio_base: number;
  marcas: {
    nombre: string;
  };
}

export function handleWhatsAppClick(product: ProductWithOffer, quantity: number) {
  let message = `Hola! Me interesa el producto: ${product.nombre} de ${product.marcas?.nombre ?? "Sin marca"}.`;

  if (quantity === 1) {
    message += ` Precio: Bs${product.precio_base}`;
  } else {
    const totalPrice = product.precio_base * quantity;
    message += ` Cantidad: ${quantity} unidades. Precio unitario: $${product.precio_base}. Total: $${totalPrice}`;
  }

  const phoneNumber = "+59174327882";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}


