import { redirect } from 'next/navigation';
import Card from '@/components/creators/Card';
import Header from '@/components/headers/Header';
import type { Metadata } from 'next';

import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'FreedevTube | Streamers',
  description:
    'Descubre y encuentra a los mejores creadores de contenido sobre programacion, diseño y cyberseguridad',
};



export default async function Creators() {
  const session = await auth();
  if (!session) return redirect('/login');

  return (
    <main className="">
      <Header
        title="Creadores de Contenido"
        paragraph="Descubre y encuentra a los mejores creadores de contenido sobre
            programacion, diseño y cyberseguridad"
      />
      <Card />
    </main>
  );
}
