import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';

const ColumnsBg = () => (
  <div className="absolute inset-0 z-0">
    <img
      src="/columns.png"
      alt=""
      aria-hidden="true"
      className="w-full h-full object-cover"
      style={{ filter: 'blur(3px) brightness(0.15)', transform: 'scale(1.05)' }}
    />
  </div>
);

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

        {/* Hero */}
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
                <Button asChild className="bg-white text-primary hover:bg-white/90 transition-all duration-300 h-14 px-10 rounded-none text-xs tracking-widest uppercase font-semibold">
                  <Link to="/contact">{t('home.hero.ctaPrimary')}</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 h-14 px-10 rounded-none text-xs tracking-widest uppercase font-semibold">
                  <Link to="/areas">{t('home.hero.ctaSecondary')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 1 — Filosofía: "Nuestra firma se fundamenta..." — blanco, grid */}
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

        {/* Services Strip — 3 containers */}
        <section className="bg-background border-b border-border">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
            >
              {[
                { n: '01', label: t('home.services.s1') },
                { n: '02', label: t('home.services.s2') },
                { n: '03', label: t('home.services.s3') },
              ].map((item) => (
                <div key={item.n} className="bg-background px-8 py-12 flex flex-col gap-6">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {item.n}
                  </span>
                  <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 2 — "El Derecho no consiste..." — columnas oscuro */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <ColumnsBg />
          <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                {t('home.statement')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3 — "AS es una figura..." — blanco, mismo grid que filosofía */}
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
                  {t('home.brand1')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 — "AS representa rigor..." — columnas oscuro */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <ColumnsBg />
          <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                {t('home.brand2')}
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
