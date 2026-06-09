import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AS Abogados & Asociados | Dirección estratégica en Derecho Penal</title>
        <meta name="description" content="Firma centrada en Derecho Penal, defensa penal estratégica y litigación penal compleja. Rigor técnico, criterio jurídico y precisión procesal." />
        <meta property="og:title" content="AS Abogados & Asociados - Dirección estratégica en Derecho Penal" />
        <meta property="og:description" content="Defensa penal técnica en procedimientos complejos. Estrategia, preparación y precisión jurídica en asuntos penales de alta exigencia." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/d7cff25dbbaed16798bf7d9fc9745b69.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="canonical" href="https://asabogadosasociados.com" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <img
              src="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/recepcion-con-mostrador-freeport-en-nogal-italiano-y-neromarquina-con-sillones-square-32-8pYwy.jpg"
              alt="Recepción de AS Abogados & Asociados"
              className="w-full h-full object-cover opacity-50"
              width="1920"
              height="1080"
              fetchpriority="high"
              loading="eager"
            />
            {/* Additional subtle overlay to ensure text contrast */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <h1 className="text-white mb-8 text-4xl md:text-5xl lg:text-6xl font-serif leading-tight drop-shadow-sm">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed max-w-2xl drop-shadow-sm">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 h-14 px-10 rounded-none text-xs tracking-widest uppercase font-semibold"
                >
                  <Link to="/contact">{t('home.hero.ctaPrimary')}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 h-14 px-10 rounded-none text-xs tracking-widest uppercase font-semibold"
                >
                  <Link to="/areas">{t('home.hero.ctaSecondary')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy/Intro Minimal Block */}
        <section className="section-padding bg-background border-b border-border">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12"
            >
              <div className="md:col-span-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                  AS Abogados & Asociados
                </span>
              </div>
              <div className="md:col-span-8 lg:col-span-6">
                <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                  {t('about.subtitle')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;