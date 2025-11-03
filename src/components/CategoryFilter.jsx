import React from "react";

const categories = ["All", "Chat", "Image & Design", "Video", "Writing", "Coding", "Audio", "Productivity"];

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 px-6 md:px-12 mt-5 overflow-x-auto">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-2 rounded-full text-sm font-medium ${
            c === active ? "badge" : "glass"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}