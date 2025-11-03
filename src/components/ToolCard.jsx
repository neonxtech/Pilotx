import React from "react";
import { motion } from "framer-motion";

export default function ToolCard({ tool, onToggleFav, isFav }) {
  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
    >
      <div className="flip-card-inner">
        {/* front */}
        <div className="flip-card-front glass p-5 rounded-2xl w-full h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={tool.icon} alt={tool.name} className="w-12 h-12 rounded-md" />
              <div>
                <h3 className="font-semibold">{tool.name}</h3>
                <div className="text-xs text-gray-300">{tool.category}</div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              {tool.trending && <div className="badge">🔥 Trending</div>}
              <button
                onClick={() => onToggleFav(tool.id)}
                className={`px-3 py-1 rounded-full text-sm ${isFav ? "bg-pink-500/90 text-white" : "bg-white/6"}`}
              >
                {isFav ? "Saved" : "Save"}
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-3 line-clamp-3">{tool.desc}</p>

          <div className="mt-4 flex gap-2">
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 text-white font-medium"
            >
              Try Now
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Check%20out%20${encodeURIComponent(tool.name)}%20on%20PilotX%20-%20${encodeURIComponent(tool.link)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-lg bg-white/6"
            >
              Share
            </a>
          </div>
        </div>

        {/* back */}
        <div className="flip-card-back glass p-5 rounded-2xl w-full h-full absolute inset-0 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{tool.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{tool.desc}</p>

            <div className="mt-3">
              <div className="text-xs text-gray-400">Category</div>
              <div className="text-sm mt-1">{tool.category}</div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 text-white">
              Open Tool
            </a>
            <small className="text-gray-400 text-xs">PilotX · No signup required</small>
          </div>
        </div>
      </div>
    </motion.div>
  );
}