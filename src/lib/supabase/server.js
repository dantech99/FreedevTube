import { createServerClient } from "@supabase/ssr";

export const createClient = (cookieStore) => {
  return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
          cookies: {
              get(name) {
                  return cookieStore.get(name)?.value;
              },
              set(name, value, options) {
                  try {
                      cookieStore.set({name, value, ...options});
                  } catch (error) {
                  }
              },
              remove(name, options) {
                  try {
                      cookieStore.set({name, value: "", ...options});
                  } catch (error) {
                  }
              },
          },
      },
  );
};