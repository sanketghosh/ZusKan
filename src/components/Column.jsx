import React from "react";
import TaskCard from "./TaskCard";
import { useStore } from "../store/store";

export default function Column({ state, color }) {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="bg-gray-950 h-[56vh] lg:h-[74vh] rounded-lg py-7 px-3 overflow-y-scroll">
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard color={color} key={color} task_desc={task.task_desc} />
        ))}
      </div>
    </div>
  );
}
