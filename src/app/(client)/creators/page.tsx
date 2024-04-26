import { redirect } from 'next/navigation';
import Card from '@/components/creators/Card';
import Header from '@/components/headers/Header';

import { auth } from '@/auth';

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
