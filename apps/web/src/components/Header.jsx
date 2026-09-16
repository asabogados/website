
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ES, GB } from 'country-flag-icons/react/3x2';

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
        <div className="grid grid-cols-3 lg:flex h-16 sm:h-20 items-center lg:justify-between gap-6">
          {/* Mobile menu trigger — left */}
          <div className="flex lg:hidden justify-self-start">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary/50 h-9 w-9 shrink-0"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5 text-primary" />
            </Button>
          </div>

          {/* Logo — centered on mobile, left on desktop */}
          <Link to="/" className="flex items-center justify-self-center lg:justify-self-auto group shrink-0" onClick={() => setIsOpen(false)}>
            <img
              src="/logo-header.png"
              alt="AS Abogados & Asociados - Firma penal"
              className="h-12 sm:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
            <span className="sr-only text-2xl tracking-widest font-serif font-semibold">
              AS Abogados & Asociados
            </span>
          </Link>

          {/* Mobile language switcher — right */}
          <div className="flex lg:hidden justify-self-end items-center gap-2">
            <button
              onClick={() => setLanguage('es')}
              aria-label="Español"
              className={`transition-opacity duration-200 ${
                language === 'es' ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <ES className="w-5 h-auto rounded-[1px] shrink-0" title="Español" />
            </button>
            <button
              onClick={() => setLanguage('en')}
              aria-label="English"
              className={`transition-opacity duration-200 ${
                language === 'en' ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <GB className="w-5 h-auto rounded-[1px] shrink-0" title="English" />
            </button>
          </div>

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

            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-border">
              <button
                onClick={() => setLanguage('es')}
                aria-label="Español"
                className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-widest transition-opacity duration-200 ${
                  language === 'es' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <ES className="w-4 h-auto rounded-[1px] shrink-0" title="Español" />
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                aria-label="English"
                className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-widest transition-opacity duration-200 ${
                  language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <GB className="w-4 h-auto rounded-[1px] shrink-0" title="English" />
                EN
              </button>
            </div>
          </nav>

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
                      src="/logo-header.png"
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
                    
                    <div className="flex items-center gap-5 mt-8 pt-8 border-t border-border">
                      <button
                        onClick={() => {
                          setLanguage('es');
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-2 text-xs font-semibold tracking-widest transition-opacity duration-200 ${
                          language === 'es' ? 'opacity-100' : 'opacity-40'
                        }`}
                      >
                        <ES className="w-5 h-auto rounded-[1px] shrink-0" title="Español" />
                        ESPAÑOL
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-2 text-xs font-semibold tracking-widest transition-opacity duration-200 ${
                          language === 'en' ? 'opacity-100' : 'opacity-40'
                        }`}
                      >
                        <GB className="w-5 h-auto rounded-[1px] shrink-0" title="English" />
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
