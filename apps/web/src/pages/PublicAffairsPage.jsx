
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';
import { ArrowUpRight } from 'lucide-react';

const FILTERS = ['all', 'national', 'eu', 'international'];

function PublicAffairsPage() {
  const { t } = useTranslation();
  const articles = t('publicAffairs.articles');
  const [filter, setFilter] = useState('all');

  const visible = Array.isArray(articles)
    ? articles.filter((article) => filter === 'all' || article.scope === filter)
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Asuntos Públicos | AS Abogados & Asociados - Análisis Jurídico Especializado</title>
        <meta name="description" content="Análisis jurídico especializado en asuntos públicos y procedimientos penales de relevancia institucional con perspectiva técnica." />
        <meta property="og:title" content="Asuntos Públicos - AS Abogados & Asociados" />
        <meta property="og:description" content="Análisis jurídico especializado en asuntos públicos y procedimientos penales de relevancia institucional." />
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

            <div className="grid grid-cols-1 gap-px bg-border">
              {visible.map((article, index) => (
                <motion.article
                  key={article.url}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background"
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-8 md:p-12 hover:bg-secondary/30 focus-visible:bg-secondary/30 focus-visible:outline-none transition-colors duration-300"
                  >
                    <div className="md:col-span-3 flex md:flex-col gap-x-4 gap-y-3 items-center md:items-start">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {article.date}
                      </span>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-primary border border-border px-2 py-1">
                        {t(`publicAffairs.scope.${article.scope}`)}
                      </span>
                    </div>
                    <div className="md:col-span-8">
                      <h2 className="text-xl md:text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      {article.forum && (
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                          {article.forum}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {article.excerpt}
                      </p>
                      <span className="text-xs tracking-wide text-foreground underline underline-offset-4 decoration-border group-hover:decoration-primary transition-colors">
                        {t('publicAffairs.readMore')} · {article.source}
                      </span>
                    </div>
                    <div className="hidden md:flex md:col-span-1 items-start justify-end">
                      <ArrowUpRight className="text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                  </a>
                </motion.article>
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
