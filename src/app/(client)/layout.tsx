import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FreedevTube | Home',
  description:
    'FreedevTube es una plataforma de educación en línea para desarrolladores de software. Encuentra los mejores recursos de aprendizaje en un solo lugar.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient ">
          {/* Layout UI */}

          {/* navbar  */}
          <div className="border-b border-slate-950">
            <SessionProvider  session={session}>
              <Navbar />
            </SessionProvider>
          </div>
          {/* main content  */}

          <main className="max-w-screen-xl px-4 py-8 mx-auto lg:py-5 ">
            {children}
          </main>

          {/* footer  */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
