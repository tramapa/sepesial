import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ValentineCard() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 p-4">
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-xl text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-red-500">Happy Valentine’s Day! ❤️</h1>
        <p className="text-lg text-gray-700 mt-4">Untuk Marsha Abigael Pangkey, Love you cinta💕</p>
        {!showMessage && (
          <Button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white"
            onClick={() => setShowMessage(true)}
          >
            Klik untuk kejutan
          </Button>
        )}
        {showMessage && (
          <motion.p
            className="mt-4 text-xl text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aku sayang kamu, Marsha! 💖💞
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
