"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Démarrer le loader lors du changement de page
    setIsLoading(true);

    // Attendre que les animations soient prêtes (délai pour les animations Framer Motion)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Durée ajustée pour les animations

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo animé */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex gap-3">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-4 h-4 bg-[#E6007E] rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="w-4 h-4 bg-[#1E88E5] rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="w-4 h-4 bg-[#94C11F] rounded-full"
                />
              </div>
            </motion.div>

            {/* Texte de chargement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg font-medium"
            >
              Chargement...
            </motion.p>

            {/* Barre de progression */}
            <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#E6007E] via-[#1E88E5] to-[#94C11F]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
