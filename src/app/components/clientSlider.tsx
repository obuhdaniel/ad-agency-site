'use client';

import { motion } from 'framer-motion';

const clients = [
  '/images/clients/1.png',
  '/images/clients/1.png',
  '/images/clients/1.png',
  '/images/clients/1.png',
  '/images/clients/1.png',
  '/images/clients/1.png',
  '/images/clients/1.png',
  '/images/clients/1.png',

];

const ClientsSlider = () => {
  const duplicatedClients = [...clients, ...clients]; // For infinite loop effect

  return (
    <div className="overflow-hidden whitespace-nowrap py-8 bg-white">
      <motion.div
        className="flex gap-16 animate-slide"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {duplicatedClients.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
            <img src={logo} alt={`Client logo ${index}`} className="object-contain h-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientsSlider;
