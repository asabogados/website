
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';
import { matters } from '@/lib/matters.js';
import MatterCard from '@/components/MatterCard.jsx';

const FILTERS = ['all', 'national', 'eu', 'international'];

function PublicAffairsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const visible = matters
    .filter((matter) => filter === 'all' || matter.scope === filter)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Experiencia | AS Abogados & Asociados - Asuntos en los que hemos intervenido</title>
        <meta name="description" content="Selección de asuntos penales en los que ha intervenido AS Abogados & Asociados, con cobertura de medios de comunicación nacionales e internacionales." />
        <meta property="og:title" content="Experiencia - AS Abogados & Asociados" />
        <meta property="og:description" content="Asuntos en los que hemos intervenido, con cobertura de medios de comunicación nacionales e internacionales." />
        <meta property="og:image" content="https://asabogadosasociados.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="canonical" href="https://asabogadosasociados.com/public-affairs" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
                {t('publicAffairs.title')}
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                {t('publicAffairs.subtitle')}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10" role="tablist">
              {FILTERS.map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={filter === key}
                  onClick={() => setFilter(key)}
                  className={`py-2 text-[11px] font-semibold tracking-widest uppercase border-b transition-colors duration-200 ${
                    filter === key
                      ? 'text-primary border-primary'
                      : 'text-muted-foreground border-transparent hover:text-foreground'
                  }`}
                >
                  {t(`publicAffairs.filters.${key}`)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
              {visible.map((matter, index) => (
                <MatterCard key={matter.id} matter={matter} index={index} />
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-xs text-muted-foreground leading-relaxed">
              {t('publicAffairs.disclaimer')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PublicAffairsPage;
