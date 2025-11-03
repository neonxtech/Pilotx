import React, { useEffect, useMemo, useState } from "react";
import toolsData from "./data/toolsData";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ToolCard from "./components/ToolCard";
import Favorites from "./components/Favorites";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [favIds, setFavIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pilotx_favs") || "[]");
    } catch {
      return [];
    }
  });
  const [showFav, setShowFav] = useState(false);

  useEffect(() => {
    localStorage.setItem("pilotx_favs", JSON.stringify(favIds));
  }, [favIds]);

  const toggleFav = (id) => {
    setFavIds((s) => (s.includes(id) ? s.filter((x) => x !== id) : [id, ...s]));
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return toolsData.filter((t) => {
      const inCategory = category === "All" ? true : t.category === category;
      const inQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  const favoriteTools = toolsData.filter((t) => favIds.includes(t.id));

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <Header onOpenFavorites={() => setShowFav(true)} />

        <main>
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter active={category} onChange={setCategory} />

          <section className="px-6 md:px-12 py-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Top Tools</h2>
              <div className="text-sm text-gray-300">{filtered.length} tools</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onToggleFav={toggleFav}
                  isFav={favIds.includes(tool.id)}
                />
              ))}
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-gray-400">
          © {new Date().getFullYear()} PilotX · Made with 💜
        </footer>
      </div>

      {showFav && (
        <Favorites
          items={favoriteTools}
          onClose={() => setShowFav(false)}
        />
      )}
    </div>
  );
}