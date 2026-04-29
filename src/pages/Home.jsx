import React, { useState, useEffect } from 'react'
import HeroSection from '../components/hero/HeroSection'
import SearchBar from '../components/filters/SearchBar'
import TypeFilter from '../components/filters/TypeFilter'
import bg from "../assets/images/bg.jpg"
import usePokemonList from '../hooks/usePokemonList'
import PokemonGrid from "../components/pokemon/PokemonGrid"
import PokemonModal from "../components/pokemon/PokemonModal"
import useFavorites from '../hooks/useFavorites'
import { FiHeart } from 'react-icons/fi'
import RocketLoader from '../components/common/RocketLoader'

const Home = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [showFavorites, setShowFavorites] = useState(false)

  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  const {
    pokemon,
    loading,
    error,
    nextPage,
    prevPage,
    setOffset,
    currentPage,
    totalPages,
  } = usePokemonList(selectedType)

  
  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  
  useEffect(() => {
    setOffset(0)
  }, [selectedType])

  const displayList = showFavorites ? favorites : filteredPokemon

  return (
    <div className="relative">

      <HeroSection />

      <div className="bg-slate-950 relative min-h-screen overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute bottom-0 w-full opacity-20 blur-sm pointer-events-none">
          <img src={bg} alt="trees" className="w-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

            <TypeFilter
              selectedType={selectedType}
              onSelect={setSelectedType}
            />

            <div className="flex items-center gap-4">

              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
              />

              {/* FAVORITE BUTTON */}
              <div
                onClick={() => setShowFavorites(prev => !prev)}
                className="relative cursor-pointer"
              >
                <div
                  className={`p-2 rounded-full border transition
                  ${showFavorites
                      ? "border-red-500 bg-red-500/20 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                      : "border-red-400/60 hover:bg-red-500/10"
                    }`}
                >
                  <FiHeart className="text-red-400 text-xl" />
                </div>

                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 
                    bg-red-500 text-white text-[10px] 
                    w-5 h-5 flex items-center justify-center 
                    rounded-full font-bold">
                    {favorites.length}
                  </span>
                )}
              </div>

            </div>
          </div>

          {/* FAVORITES HEADER */}
          {showFavorites && (
            <div className="flex justify-between items-center mb-6">
              <p className="text-white text-sm">Showing Favorites ❤️</p>

              <button
                onClick={() => setShowFavorites(false)}
                className="text-sm text-purple-400 hover:underline"
              >
                ← Back to all
              </button>
            </div>
          )}

          {/* ERROR STATE */}
          {error && (
            <p className="text-red-400 text-center mb-6">
              {error}
            </p>
          )}

          {/* CONTENT STATE */}
          {loading && !showFavorites ? (
            <div className="flex justify-center items-center h-[300px]">
              <RocketLoader />
            </div>
          ) : (
            <>
              {/* FAVORITES EMPTY */}
              {showFavorites && favorites.length === 0 && (
                <p className="text-gray-400 text-center mb-6">
                  No favorites yet 💔
                </p>
              )}

              {/* SEARCH EMPTY */}
              {!showFavorites && filteredPokemon.length === 0 && (
                <p className="text-gray-400 text-center mb-6">
                  No Pokémon found 🔍
                </p>
              )}

              {/* GRID */}
              {(showFavorites ? favorites.length > 0 : filteredPokemon.length > 0) && (
                <PokemonGrid
                  pokemonList={displayList}
                  onCardClick={setSelectedPokemon}
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />
              )}
            </>
          )}

          {/* PAGINATION */}
          {!showFavorites && !loading && totalPages > 0 && (
            <div className="flex items-center justify-between mt-10">

              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded transition
                  ${currentPage === 1
                    ? "bg-slate-700 text-gray-400 cursor-not-allowed"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
              >
                Previous
              </button>

              <p className="text-white text-sm">
                Page {currentPage} / {totalPages}
              </p>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded transition
                  ${currentPage === totalPages
                    ? "bg-purple-400/40 text-gray-300 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
              >
                Next
              </button>

            </div>
          )}

        </div>
      </div>

      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />

    </div>
  )
}

export default Home
