import React from "react";

export default function Favorites({ items, onClose, onOpenTool }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl p-6 glass rounded-2xl z-10">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Your Favorites</h3>
          <button onClick={onClose} className="px-3 py-2 rounded-lg glass">Close</button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.length ? (
            items.map((t) => (
              <div key={t.id} className="p-3 rounded-lg bg-white/6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.icon} alt={t.name} className="w-10 h-10 rounded-md" />
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-gray-300">{t.category}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={t.link} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-blue-400 text-white text-sm">
                    Open
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-300">No favorites yet — save tools to access them quickly.</div>
          )}
        </div>
      </div>
    </div>
  );
}