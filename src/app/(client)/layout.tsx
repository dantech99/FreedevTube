import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FreedevTube',
  description:
    'en esta web podras encontrar los mejores cursos de programacion,hacking y diseño web',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-gradient '>
        {/* Layout UI */}

        <NextUIProvider>
        {/* navbar  */}
        <div className='border-b border-slate-950'>

        <Navbar />
        </div>
        {/* main content  */}
     
            <main className='max-w-screen-xl px-4 py-8 mx-auto lg:py-5 '>
              {children}
            </main>
        
        {/* footer  */}
        <Footer />
        </NextUIProvider>        
        </div>


      </body>
    </html>
  );
}
