import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>404 | AS Abogados & Asociados</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex items-center">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-3">
              <span className="font-serif text-8xl md:text-9xl text-muted leading-none select-none">
                404
              </span>
            </div>
            <div className="md:col-span-6">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground block mb-4">
                Página no encontrada
              </span>
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-10">
                La dirección solicitada no existe o ha sido modificada.
              </p>
              <Button
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 h-14 px-10 rounded-none text-xs tracking-widest uppercase font-semibold"
              >
                <Link to="/">Volver al inicio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
