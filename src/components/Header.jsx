import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ onOpenFavorites }) {
  return (
    <header className="py-6 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-400 text-white shadow-lg">
          <strong>PX</strong>
        </div>
        <div>
          <h1 className="text-2xl font-bold">PilotX</h1>
          <p className="text-sm text-gray-300">AI Tools Hub — discover, try, share</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onOpenFavorites}
          className="px-3 py-2 rounded-xl glass flex items-center gap-2 hover:scale-105 transition"
        >
          ❤️ Favorites
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}