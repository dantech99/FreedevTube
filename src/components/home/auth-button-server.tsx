import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if(!user) {
    redirect('/unauthorized')
  }  

   return (
    <>
    </>
   )
}