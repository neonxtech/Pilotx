import React, { useState } from "react";
import { motion } from "framer-motion";
import tools from "./data/toolsData";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-900 text-white">
      <header className="text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            PilotX
          </span>{" "}
          AI Tools Hub 🚀
        </motion.h1>
        <p className="mt-3 text-gray-400 text-lg">
          Discover, Explore & Use Free AI Tools Instantly
        </p>

        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Search AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-3 w-80 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/20 focus:border-purple-400 transition-all"
          />
        </div>
      </header>

      <main className="px-6 md:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length ? (
          filtered.map((tool, i) => (
            <motion.a
              key={i}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-lg"
            >
              <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-3" />
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                {tool.desc}
              </p>
              <div className="mt-3 text-sm text-purple-300">
                {tool.category}
              </div>
            </motion.a>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-lg">
            No tools found 😔
          </p>
        )}
      </main>

      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © 2025 PilotX • Made with 💜 for AI Enthusiasts
      </footer>
    </div>
  );
}
