import { useEffect, useState } from "react";
import { supabase } from "@/lib/services/supabaseClient";
import type { User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener la sesión al cargar
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;

      setUser(session.user);
      setLoading(false);
    });

    // Escuchar cambios de sesión (login/logout)
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  return { user, loading };
}
