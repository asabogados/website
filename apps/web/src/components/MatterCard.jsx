import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation.jsx';

const formatDate = (iso, language) => {
  const text = new Date(iso).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Va dentro de un grid con `border-t border-l border-border`.
function MatterCard({ matter, index = 0, as: Heading = 'h2' }) {
  const { t, language } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);
  const translated = typeof matter.headline === 'object';
  const headline = translated ? matter.headline[language] : matter.headline;
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
              className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
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

          <Heading
            lang={translated ? language : matter.lang}
            className="font-serif text-xl leading-snug text-foreground group-hover:text-primary transition-colors"
          >
            {headline}
          </Heading>

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

export default MatterCard;
