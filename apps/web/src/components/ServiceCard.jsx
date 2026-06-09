import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ title, description, index = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`minimal-card flex flex-col h-full ${className}`}
    >
      <div className="mb-6 w-10 h-10 border-b-2 border-accent flex items-center justify-center opacity-80" aria-hidden="true">
        {/* Abstract minimalist indicator instead of cliché icons */}
        <span className="text-xl font-serif text-accent block translate-y-1">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      
      <h3 className="mb-4 text-foreground font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;