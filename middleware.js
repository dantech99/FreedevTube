import {createClient} from "@/lib/supabase/middleware";

export async function middleware(req) {
    const {supabase, response} = createClient(req);
    await supabase.auth.getSession();
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};