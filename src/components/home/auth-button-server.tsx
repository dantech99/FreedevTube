import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { AuthButton } from './auth-button-client';

export async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if(user === null) {
    redirect('/unauthorized')
  }  

   return (
    <></>
   )
}