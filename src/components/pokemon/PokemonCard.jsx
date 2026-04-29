import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const typeColors = {
  grass: "from-green-400/30 to-green-700/20",
  fire: "from-orange-400/30 to-red-600/20",
  water: "from-blue-400/30 to-blue-700/20",
};

export default function PokemonCard({
  pokemon,
  onClick,
  toggleFavorite,
  isFavorite,
  index = 0,
}) {
  const mainType = pokemon.types?.[0];
  const gradient =
    typeColors[mainType] || "from-slate-700/40 to-slate-900/40";

  const favorite = isFavorite(pokemon.id);

  return (
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      {/* HEART ICON */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(pokemon);
        }}
        className="absolute top-2 right-2 z-10 cursor-pointer"
      >
        <div
          className={`p-2 rounded-full transition ${
            favorite
              ? "bg-pink-500/20 shadow-[0_0_12px_rgba(236,72,153,0.8)]"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          {favorite ? (
            <FaHeart className="text-pink-500" />
          ) : (
            <FiHeart className="text-white" />
          )}
        </div>
      </div>

      {/* CARD */}
      <motion.div
        onClick={() => onClick(pokemon)}
        className={`w-full max-w-[180px] pt-16 pb-6 px-4 rounded-2xl 
        bg-gradient-to-br ${gradient}
        backdrop-blur-lg border border-white/10
        shadow-lg text-center cursor-pointer`}
        whileHover={{
          scale: 1.05,
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-white text-lg font-semibold capitalize">
          {pokemon.name}
        </h3>
      </motion.div>

     
      <motion.img
        src={pokemon.image}
        alt={pokemon.name}
        className="absolute -top-10 w-24 h-24 object-contain drop-shadow-xl pointer-events-none"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

