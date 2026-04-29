import React from "react";

const TYPES = ["All", "Grass", "Fire", "Water", "Electric", "Bug", "Normal"];

const TypeFilter = ({ selectedType, onSelect }) => {
  return (
    <div className="w-full md:w-auto">
      
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        
        {TYPES.map((type) => {
          const isActive = selectedType === type;

          return (
            <button
              key={type}
              onClick={() => onSelect(type)}
              className={`px-4 py-1 rounded-full text-sm whitespace-nowrap shrink-0 transition cursor-pointer
                ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
            >
              {type}
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default TypeFilter; 