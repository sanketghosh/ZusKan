import React from "react";
import { Column, Header } from "./components";

export default function App() {
  const column_states = [
    { state: "PLANNED", color: "bg-indigo-300" },
    { state: "ONGOING", color: "bg-amber-300" },
    { state: "DONE", color: "bg-emerald-300" },
  ];

  return (
    <main className="max-w-7xl mx-auto text-gray-100 px-3 py-4">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-7">
        {column_states.map((col) => (
          <div className="" key={col.state}>
            <h1
              className={`text-gray-600 font-semibold text-center my-4 ${col.color} py-3 rounded-lg text-xl`}
            >
              {col.state}
            </h1>
            <Column state={col.state} color={col.color} />
          </div>
        ))}
      </div>
    </main>
  );
}
