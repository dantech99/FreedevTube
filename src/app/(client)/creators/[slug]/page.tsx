import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';

interface CreatorProps {
  params: any;
  slug: string;
}

export default async function Creator({ params }: { params: CreatorProps }) {
  const supabase = createServerComponentClient({ cookies });

  const { slug } = params;

  const { data: creador, error } = await supabase
    .from('creadores')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!creador) {
    return {
      status: 404,
      content: <div>El creador no fue encontrado</div>,
    };
  }
  return (
    <>
      <main className="h-screen">
        <h1>{creador.nombre}</h1>
        <p>{creador.descripcion}</p>
      </main>
    </>
  );
}
