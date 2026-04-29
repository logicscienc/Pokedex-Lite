import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex w-full md:w-[350px] bg-slate-800 rounded-xl overflow-hidden">
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Pokémon..."
        className="flex-1 px-4 py-2 bg-transparent text-white outline-none"
      />

      <button className="px-4 bg-purple-600 hover:bg-purple-700 transition flex items-center justify-center">
        <FiSearch className="text-white text-lg" />
      </button>

    </div>
  );
};

export default SearchBar;