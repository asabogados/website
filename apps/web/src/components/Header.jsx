
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/areas', label: t('nav.areas') },
    { path: '/about', label: t('nav.about') },
    { path: '/public-affairs', label: t('nav.publicAffairs') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border shadow-sm transition-all duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0 py-2" onClick={() => setIsOpen(false)}>
            <img 
              src="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/d7cff25dbbaed16798bf7d9fc9745b69.png" 
              alt="AS Abogados & Asociados - Firma penal" 
              className="h-12 sm:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
            <span className="sr-only text-2xl tracking-widest font-serif font-semibold">
              AS Abogados & Asociados
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] sm:text-xs tracking-widest uppercase transition-colors duration-200 relative py-2 font-medium ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary" />
                )}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-6 pl-6 border-l border-border h-4">
              <button
                onClick={() => setLanguage('es')}
                className={`text-[10px] font-semibold tracking-widest transition-colors duration-200 ${
                  language === 'es' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
              <span className="text-muted-foreground/30 text-[9px] mx-1">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-[10px] font-semibold tracking-widest transition-colors duration-200 ${
                  language === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Trigger */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden ml-auto hover:bg-secondary/50 h-9 w-9 shrink-0"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5 text-primary" />
          </Button>

          {/* Custom Mobile Menu overlay & panel with Framer Motion */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
                  onClick={() => setIsOpen(false)}
                  aria-hidden="true"
                />

                {/* Sliding Panel */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 right-0 z-50 w-[300px] sm:w-[360px] border-l border-border bg-white shadow-2xl lg:hidden flex flex-col p-6 overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="sr-only">Menú de navegación</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setIsOpen(false)}
                      className="ml-auto hover:bg-secondary/50 h-9 w-9 shrink-0"
                      aria-label="Cerrar menú"
                    >
                      <X className="h-5 w-5 text-primary" />
                    </Button>
                  </div>

                  <div className="mb-10">
                    <img 
                      src="https://horizons-cdn.hostinger.com/79c69ed8-ea9a-47ca-bedd-0cb9f3493118/d7cff25dbbaed16798bf7d9fc9745b69.png" 
                      alt="AS Abogados & Asociados - Firma penal" 
                      className="h-16 w-auto object-contain opacity-90"
                    />
                  </div>

                  <nav className="flex flex-col gap-5 flex-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm tracking-widest uppercase transition-colors duration-200 font-medium ${
                          isActive(link.path)
                            ? 'text-primary'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                    
                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                      <button
                        onClick={() => {
                          setLanguage('es');
                          setIsOpen(false);
                        }}
                        className={`text-xs font-semibold tracking-widest transition-colors duration-200 ${
                          language === 'es' ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        ESPAÑOL
                      </button>
                      <span className="text-muted-foreground/30 text-[10px]">|</span>
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsOpen(false);
                        }}
                        className={`text-xs font-semibold tracking-widest transition-colors duration-200 ${
                          language === 'en' ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        ENGLISH
                      </button>
                    </div>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Header;
