"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Démarrer le loader lors du changement de page
    setIsLoading(true);

    // Attendre que le DOM soit prêt et les animations initialisées
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Délai pour laisser les animations se charger

    return () => clearTimeout(loadTimer);
  }, [pathname]);

  // Loader initial au montage de l'app
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Logo animé avec les 3 couleurs */}
              <div className="flex gap-3">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-5 h-5 bg-[#E6007E] rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="w-5 h-5 bg-[#1E88E5] rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="w-5 h-5 bg-[#94C11F] rounded-full"
                />
              </div>

              {/* Nom de l'association */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold text-[#E6007E]">
                  Dom'Enfance & Famille
                </h2>
                <p className="text-gray-500 text-sm mt-2">Chargement...</p>
              </motion.div>

              {/* Barre de progression */}
              <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-[#E6007E] via-[#1E88E5] to-[#94C11F]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </LoadingContext.Provider>
  );
}
