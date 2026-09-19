
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';
import { matters } from '@/lib/matters.js';
import { ArrowUpRight } from 'lucide-react';

const FILTERS = ['all', 'national', 'eu', 'international'];

const formatDate = (iso, language) => {
  const text = new Date(iso).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return text.charAt(0).toUpperCase() + text.slice(1);
};

function MatterCard({ matter, index }) {
  const { t, language } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = matter.image && !imageFailed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="bg-background border-r border-b border-border"
    >
      <a
        href={matter.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col hover:bg-secondary/30 focus-visible:bg-secondary/30 focus-visible:outline-none transition-colors duration-300"
      >
        {showImage && (
          <div className="aspect-[3/2] w-full overflow-hidden bg-secondary">
            <img
              src={matter.image}
              alt=""
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              {formatDate(matter.date, language)}
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-primary border border-border px-2 py-1">
              {t(`publicAffairs.scope.${matter.scope}`)}
            </span>
          </div>

          <h2
            lang={matter.lang}
            className="font-serif text-xl leading-snug text-foreground group-hover:text-primary transition-colors"
          >
            {matter.headline}
          </h2>

          <span className="mt-auto flex items-center justify-between gap-4 pt-2 text-xs tracking-wide text-muted-foreground">
            <span className="underline underline-offset-4 decoration-border group-hover:decoration-primary transition-colors">
              {t('publicAffairs.readMore')} · {matter.source}
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </span>
        </div>
      </a>
    </motion.article>
  );
}

function PublicAffairsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const visible = matters
    .filter((matter) => filter === 'all' || matter.scope === filter)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Asuntos en los que hemos intervenido | AS Abogados & Asociados</title>
        <meta name="description" content="Selección de asuntos penales en los que ha intervenido AS Abogados & Asociados, con cobertura de medios de comunicación nacionales e internacionales." />
        <meta property="og:title" content="Asuntos en los que hemos intervenido - AS Abogados & Asociados" />
        <meta property="og:description" content="Selección de asuntos penales con repercusión en medios de comunicación nacionales e internacionales." />
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
