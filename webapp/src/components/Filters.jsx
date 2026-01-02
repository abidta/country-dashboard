import React from "react";

const Filters = ({ region, setRegion, regions }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        <option value="">All Regions</option>
        {regions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Filters;
