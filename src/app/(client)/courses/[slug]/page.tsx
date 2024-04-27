

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
interface CourseProps {
  params: any;
  slug: string;

}

export default async function Course({ params }: { params: CourseProps }) {

  // const supabase = createServerComponentClient({ cookies });


  // const { slug } = params;

  // const { data: cursos, error } = await supabase
  //   .from('cursos')
  //   .select('*')
  //   .eq('slug', slug)
  //   .single();

  // if (!cursos) {
  //   return {
  //     status: 404,
  //     content: <div>El curso no fue encontrado</div>,
  //   };
  // }

  return (
    <div className='h-screen w-full items-center justify-center'>
         <h1 className=''>CURSO EN CUESTION</h1>
    </div>
  )
  
}