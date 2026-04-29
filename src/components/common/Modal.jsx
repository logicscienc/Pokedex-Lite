import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

        
          <motion.div
            className="relative bg-slate-900 rounded-2xl p-6 w-[90%] max-w-md"
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
           
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-white text-xl"
            >
              <MdClose/>
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;