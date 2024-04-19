import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FreedevTube',
  description:
    'en esta web podras encontrar los mejores cursos de programacion,hacking y diseño web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-gradient-to-b from-gray-900 to-zinc-900 '>

        {/* Layout UI */}

        {/* navbar  */}
        <div className='border-b border-slate-950'>

        <Navbar />
        </div>
        {/* main content  */}
        <main className='max-w-screen-xl px-4 py-8 mx-auto lg:py-5 '>{children}</main>

        {/* footer  */}
        <Footer />
        
        </div>


      </body>
    </html>
  );
}
