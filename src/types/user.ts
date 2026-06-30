export interface User {
  id: string;
  email?: string;
}

export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  language: "en" | "ar";
  theme: "light" | "dark" | "system";
  avatar_url: string | null;
}
