
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';
import { ArrowUpRight } from 'lucide-react';

function PublicAffairsPage() {
  const { t } = useTranslation();
  const articles = t('publicAffairs.articles');

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Asuntos Públicos | AS Abogados & Asociados - Análisis Jurídico Especializado</title>
        <meta name="description" content="Análisis jurídico especializado en asuntos públicos y procedimientos penales de relevancia institucional con perspectiva técnica." />
        <meta property="og:title" content="Asuntos Públicos - AS Abogados & Asociados" />
        <meta property="og:description" content="Análisis jurídico especializado en asuntos públicos y procedimientos penales de relevancia institucional." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/d7cff25dbbaed16798bf7d9fc9745b69.png" />
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
              className="max-w-3xl mb-20"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
                {t('publicAffairs.title')}
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                {t('publicAffairs.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-px bg-border">
              {Array.isArray(articles) && articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background group cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 hover:bg-secondary/30 transition-colors duration-300">
                    <div className="md:col-span-3">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground block">
                        {article.date}
                      </span>
                    </div>
                    <div className="md:col-span-8">
                      <h2 className="text-xl md:text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="md:col-span-1 flex items-start justify-end">
                      <ArrowUpRight className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PublicAffairsPage;
