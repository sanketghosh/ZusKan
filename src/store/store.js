import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      task_desc: "TestTask",
      state: "DONE",
    },
  ],

  addTask: (task_desc, state) =>
    set((store) => ({
      tasks: [...store.tasks, { task_desc, state }],
    })),
});

export const useStore = create(store);
