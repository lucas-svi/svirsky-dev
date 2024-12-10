"use client";
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactMe from '@/components/ContactMe'
import PageTransition from '@/components/PageTransition';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white min-h-screen flex flex-col">
        <Navbar />
        <PageTransition>
          <main className="flex-grow container mx-auto px-6 py-8 mt-16">
            {children}
          </main>
        </PageTransition>
        <ContactMe />
        <Footer />
      </body>
    </html>
  );
}