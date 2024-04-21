import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function CreatorsPage  ()  {
  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()

  if(session === null) {
    redirect('/login')
  }
  return (
    <div>
      <h1>Contenido para creadores</h1>
    </div>
  );
};

