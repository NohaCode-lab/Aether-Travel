import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useThemeStore } from "./store/themeStore";
import { useAuthStore } from "./store/authStore";
import { supabase } from "./services/supabase";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const { theme } = useThemeStore();
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser, setLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-emerald-50/60 via-slate-50 to-teal-50/40 dark:from-slate-950 dark:via-teal-950/70 dark:to-blue-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
