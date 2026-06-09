
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Contacto | AS Abogados & Asociados - Consultoría Penal Profesional</title>
        <meta name="description" content="Contacte con AS Abogados & Asociados para consultoría profesional en Derecho Penal, defensa penal y litigación penal compleja." />
        <meta property="og:title" content="Contacto - AS Abogados & Asociados" />
        <meta property="og:description" content="Contacte con nuestra firma para consultoría profesional en asuntos penales complejos." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/d7cff25dbbaed16798bf7d9fc9745b69.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="canonical" href="https://asabogadosasociados.com/contact" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                  {t('contact.title')}
                </h1>
                <p className="text-lg text-muted-foreground font-light mb-12">
                  {t('contact.subtitle')}
                </p>

                <div className="border-t border-border pt-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground block mb-2">
                      {t('footer.headquarters')}
                    </span>
                    <address className="not-italic text-sm text-foreground">
                      Madrid, España
                    </address>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div className="institutional-border p-8 md:p-12">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
