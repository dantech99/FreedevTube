import {createClient} from "@/lib/supabase/server";
import { cookies } from 'next/headers';
import { AuthButton } from "./auth-button-client";
import Navbar from "./navbar";

export async function ButtonServer() {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();


  return <>
    <AuthButton session={session} />;
  </> 
}
