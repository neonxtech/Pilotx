import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex justify-center mt-4 px-6 md:px-12">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Search AI tools, e.g., 'image', 'chat', 'video'..."
        className="w-full max-w-2xl px-4 py-3 rounded-2xl bg-white/6 placeholder-gray-300 outline-none border border-white/10 focus:border-purple-400 transition"
      />
    </div>
  );
}