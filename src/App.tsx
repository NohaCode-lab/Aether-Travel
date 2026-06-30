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
      retry: 1, // Don't retry indefinitely on failure
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const { theme, language } = useThemeStore();
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    // Apply Theme and RTL logic
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [theme, language]);

  useEffect(() => {
    // Check current session on app load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for any login/logout state changes
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
