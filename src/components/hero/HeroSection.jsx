import React from "react";
import { motion } from "framer-motion";
import pngegg from "../../assets/images/pngegg.png";

export default function HeroSection() {
  return (
    <section className="w-full h-[80vh] flex flex-col justify-between bg-gradient-to-br from-green-500 to-green-800">

      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between flex-1">

        {/* LEFT */}
        <motion.div
          className="flex-1 text-white space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            POKÉMON
          </motion.h1>

          <motion.h2
            className="text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hoppip
          </motion.h2>

          {/* Types */}
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
              Cuteness
            </span>
            <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">
              Cloud cute
            </span>
          </motion.div>

          <motion.p
            className="text-sm max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hoppip is a round, pink plant Pokémon with long green leaves growing
            on top of its head. The leaves on its head have ragged edges, similar
            to a dandelion. It has big, triangular ears with dark insides, and
            beady yellow eyes that lack pupils. Its arms and legs are stubby, and
            it has a short tail with a rounded tip.
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={pngegg}
            alt="Hoppip"
            className="w-72 md:w-96"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>

      {/* CURVE SVG */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#020617"
            d="M0,0L60,32C120,64,240,128,360,149.3C480,171,600,149,720,128C840,107,960,85,1080,85.3C1200,85,1320,107,1380,117.3L1440,128V160H0Z"
          />
        </svg>
      </div>

    </section>
  );
}
