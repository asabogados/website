import React from 'react';
import { useTranslation } from '@/hooks/useTranslation.jsx';
function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    t
  } = useTranslation();
  return <footer className="bg-background border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="flex flex-col items-start max-w-sm">
            <span className="font-serif text-2xl tracking-tight text-foreground mb-4">
              AS Abogados & Asociados
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {t('footer.discretion')}
            </p>
          </div>

          <div className="md:justify-self-end">
            <span className="text-[10px] font-semibold tracking-widest uppercase mb-6 block text-foreground">
              {t('footer.headquarters')}
            </span>
            <div className="flex flex-col gap-4">
              <span className="text-sm text-muted-foreground">
                Málaga · Madrid · Marbella
              </span>
              <span className="text-sm text-muted-foreground">
                consultas@asabogadosasociados.com
              </span>
            </div>
          </div>

        </div>

        <div className="border-t border-border mt-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {currentYear} AS Abogados & Asociados. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>;
}
export default Footer;