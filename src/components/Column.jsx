import React from "react";
import TaskCard from "./TaskCard";

export default function Column({ state, color }) {
  return (
    <div className="bg-gray-950 h-[56vh] lg:h-[74vh] rounded-lg py-7 px-3 overflow-y-scroll">
      <div className="flex flex-col gap-2">
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
        <TaskCard color={color} />
      </div>
    </div>
  );
}
