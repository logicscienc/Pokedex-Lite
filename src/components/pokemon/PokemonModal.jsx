import React from "react";
import {
  FaTimes,
  FaRulerVertical,
  FaWeightHanging,
} from "react-icons/fa";
import { TbNorthStar } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { AiTwotoneIdcard } from "react-icons/ai";

import { GiElectric, GiBugNet } from "react-icons/gi";

const typeColors = {
  bug: "bg-green-500/20 text-green-400 border-green-500/30",
  electric: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const statColors = [
  "bg-green-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-cyan-400",
  "bg-blue-400",
  "bg-purple-400",
];

const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      
     
      <div className="relative w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto 
+  rounded-2xl p-6 text-white 
+  bg-gradient-to-br from-[#1b1b3a] to-[#0a0a1a] shadow-2xl border border-white/10">

       
        <button
          onClick={onClose}
          className="sticky top-0 ml-auto block mb-2 text-gray-400 hover:text-white"
        >
          <FaTimes size={18} />
        </button>

        
        <div className="flex flex-col md:flex-row gap-6">

         
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-gradient-to-br from-purple-600/30 to-transparent p-6 sm:p-6 rounded-xl">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          
          <div className="flex-1">
            <p className="text-sm text-gray-400">#{pokemon.id}</p>

            <h2 className="text-3xl font-bold capitalize">
              {pokemon.name}
            </h2>

            {/* TYPES */}
            <div className="flex gap-2 mt-3">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border ${
                    typeColors[type]
                  }`}
                >
                  {type === "bug" && <GiBugNet />}
                  {type === "electric" && <GiElectric />}
                  {type}
                </span>
              ))}
            </div>

            {/* HEIGHT + WEIGHT */}
            <div className="flex gap-6 mt-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <FaRulerVertical />
                {pokemon.height / 10} m
              </div>
              <div className="flex items-center gap-2">
                <FaWeightHanging />
                {pokemon.weight / 10} kg
              </div>
            </div>
          </div>
        </div>

        {/* ABILITIES */}
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TbNorthStar/> Abilities
          </h3>

          <div className="flex flex-wrap gap-2">
            {pokemon.abilities.map((a) => (
              <span
                key={a.ability.name}
                className="px-3 py-1 bg-white/10 rounded-md text-sm capitalize"
              >
                {a.ability.name}
              </span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold mb-4 flex gap-2 items-center">
            <IoStatsChart/> Base Stats
          </h3>

          <div className="space-y-3">
            {pokemon.stats.map((s, i) => (
              <div key={s.stat.name}>
                
                <div className="flex justify-between text-sm mb-1">
                  <span className="capitalize text-gray-300">
                    {s.stat.name}
                  </span>
                  <span>{s.base_stat}</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full">
                  <div
                    className={`h-2 rounded-full ${statColors[i]}`}
                    style={{
                      width: `${(s.base_stat / 255) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-gray-300">
          <div>
            <p className="text-gray-500">ID</p>
            <p>{pokemon.id}</p>
          </div>
          <div>
            <p className="text-gray-500">Height</p>
            <p>{pokemon.height / 10} m</p>
          </div>
          <div>
            <p className="text-gray-500">Weight</p>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default PokemonModal;