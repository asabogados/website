
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';

function AreasPage() {
  const { t } = useTranslation();

  const areas = t('areas.items');

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Áreas de Práctica | AS Abogados & Asociados - Especialidades en Derecho Penal</title>
        <meta name="description" content="Especialidades penales: defensa penal, litigación penal compleja, penal económico, compliance penal y procedimientos penales de alta exigencia." />
        <meta property="og:title" content="Áreas de Práctica - AS Abogados & Asociados" />
        <meta property="og:description" content="Especialidades en Derecho Penal: defensa estratégica, litigación compleja y compliance penal con rigor técnico." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/d7cff25dbbaed16798bf7d9fc9745b69.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="canonical" href="https://asabogados.com/areas" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-24"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
                {t('areas.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                {t('areas.subtitle')}
              </p>
            </motion.div>

            <div className="flex flex-col">
              {Array.isArray(areas) && areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border"
                >
                  <div className="md:col-span-3 lg:col-span-2">
                    <span className="text-4xl font-serif text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="md:col-span-9 lg:col-span-8">
                    <h2 className="text-2xl font-serif text-foreground mb-6">
                      {area.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AreasPage;
