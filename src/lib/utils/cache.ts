// src/lib/utils/cache.ts

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live en milisegundos
}

interface CacheStore {
  [key: string]: CacheEntry<any>;
}

// Configuración del cache
export const CACHE_CONFIG = {
  CATEGORIES: 5 * 60 * 1000, // 5 minutos
  BRANDS: 5 * 60 * 1000, // 5 minutos
  PRODUCTS: 2 * 60 * 1000, // 2 minutos
  MOST_REQUESTED: 10 * 60 * 1000, // 10 minutos
  PRODUCT_BY_ID: 5 * 60 * 1000, // 5 minutos
  PRODUCTS_BY_CATEGORY: 3 * 60 * 1000, // 3 minutos
  FILTERED_PRODUCTS: 1 * 60 * 1000, // 1 minuto para filtros
};

export class CacheManager {
  private cache: CacheStore = {};

  // Generar clave para el cache
  generateKey(prefix: string, params?: any): string {
    if (!params) return prefix;
    try {
      const paramsString = JSON.stringify(params);
      return `${prefix}_${btoa(paramsString)}`;
    } catch {
      // Fallback si hay problemas con JSON.stringify
      return `${prefix}_${Date.now()}`;
    }
  }

  // Verificar si una entrada del cache es válida
  private isValid<T>(entry: CacheEntry<T>): boolean {
    const now = Date.now();
    return now - entry.timestamp < entry.ttl;
  }

  // Obtener del cache
  get<T>(key: string): T | null {
    const entry = this.cache[key] as CacheEntry<T>;
    if (!entry) return null;
    
    if (this.isValid(entry)) {
      console.log(`📦 Cache hit: ${key}`);
      return entry.data;
    }
    
    // Eliminar entrada expirada
    delete this.cache[key];
    console.log(`⏰ Cache expired: ${key}`);
    return null;
  }

  // Guardar en cache
  set<T>(key: string, data: T, ttl: number): void {
    this.cache[key] = {
      data,
      timestamp: Date.now(),
      ttl
    };
    console.log(`💾 Cache set: ${key} (TTL: ${ttl}ms)`);
  }

  // Invalidar cache específico
  invalidate(pattern: string): void {
    const keysToDelete = Object.keys(this.cache).filter(key => 
      key.startsWith(pattern)
    );
    
    keysToDelete.forEach(key => {
      delete this.cache[key];
      console.log(`🗑️ Cache invalidated: ${key}`);
    });
  }

  // Limpiar todo el cache
  clear(): void {
    const keysCount = Object.keys(this.cache).length;
    this.cache = {};
    console.log(`🧹 Cache cleared: ${keysCount} entries removed`);
  }

  // Limpiar entradas expiradas
  cleanup(): void {
    let removedCount = 0;
    Object.keys(this.cache).forEach(key => {
      const entry = this.cache[key];
      if (!this.isValid(entry)) {
        delete this.cache[key];
        removedCount++;
      }
    });
    
    if (removedCount > 0) {
      console.log(`🧽 Cache cleanup: ${removedCount} expired entries removed`);
    }
  }

  // Obtener estadísticas del cache
  getStats(): { total: number; expired: number; valid: number } {
    const keys = Object.keys(this.cache);
    const total = keys.length;
    let expired = 0;
    let valid = 0;

    keys.forEach(key => {
      if (this.isValid(this.cache[key])) {
        valid++;
      } else {
        expired++;
      }
    });

    return { total, expired, valid };
  }

  // Obtener tamaño aproximado del cache en bytes
  getSize(): number {
    try {
      return new Blob([JSON.stringify(this.cache)]).size;
    } catch {
      return 0;
    }
  }
}