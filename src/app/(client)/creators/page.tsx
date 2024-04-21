import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Card from "@/components/creators/Card";
import Header from "@/components/creators/Header";

export default async function Page() {
    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    if(session === null) {
      redirect('/login')
    }
    return(
        <>
            <Header />
            <Card />
        </>
    )
}
