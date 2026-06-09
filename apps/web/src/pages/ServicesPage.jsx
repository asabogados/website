import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { useTranslation } from '@/hooks/useTranslation.jsx';

function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    { key: 'penal', span: 'col-span-1 md:col-span-2' },
    { key: 'procesal', span: 'col-span-1' },
    { key: 'patrimonial', span: 'col-span-1 md:col-span-2' },
    { key: 'licitacion', span: 'col-span-1' },
    { key: 'compliance', span: 'col-span-1 md:col-span-2 lg:col-span-3' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('services.meta.title')}</title>
        <meta name="description" content={t('services.meta.description')} />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background">
        
        {/* Page Header */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 border-b border-border/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
                  {t('services.header.title')}
                </h1>
                <p className="text-xl text-muted-foreground font-light max-w-xl">
                  {t('services.header.subtitle')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative h-64 overflow-hidden rounded-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1630863883944-32d09ed59265" 
                  alt="Legal context"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={service.key} className={service.span}>
                  <ServiceCard
                    title={t(`services.items.${service.key}.title`)}
                    description={t(`services.items.${service.key}.desc`)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;