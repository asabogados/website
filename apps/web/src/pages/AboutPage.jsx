
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';

function AboutPage() {
  const { t } = useTranslation();
  
  const content = t('about.content');
  const team = t('about.team.members');

  const initials = (name) =>
    name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('');

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sobre Nosotros | AS Abogados & Asociados - Criterio Jurídico y Excelencia Procesal</title>
        <meta name="description" content="Firma de abogados penalistas con criterio jurídico, excelencia procesal y especialización en asuntos penales complejos de nivel internacional." />
        <meta property="og:title" content="Sobre Nosotros - AS Abogados & Asociados" />
        <meta property="og:description" content="Criterio jurídico, excelencia procesal y especialización en Derecho Penal con rigor técnico internacional." />
        <meta property="og:image" content="https://asabogadosasociados.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="canonical" href="https://asabogadosasociados.com/about" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground mb-12 text-center md:text-left">
                {t('about.title')}
              </h1>
              
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-16 pb-16 border-b border-border">
                {t('home.brand3')}
              </p>

              <div className="space-y-12 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                {Array.isArray(content) && content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 md:pb-32 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto border-t border-border pt-16"
            >
              <h2 className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-10">
                {t('about.team.title')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
                {Array.isArray(team) && team.map((member) => (
                  <div key={member.name} className="bg-background p-8 flex flex-col gap-8">
                    <div
                      aria-hidden="true"
                      className="h-16 w-16 border border-border flex items-center justify-center font-serif text-xl tracking-wide text-foreground"
                    >
                      {initials(member.name)}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground leading-snug">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
