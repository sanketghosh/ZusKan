import { useState } from "react";
import { Column, Header, Modal } from "./components";
import { useStore } from "./store/store";

export default function App() {
  const [taskDescription, setTaskDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const column_states = [
    { state: "PLANNED", color: "bg-indigo-300" },
    { state: "ONGOING", color: "bg-amber-300" },
    { state: "DONE", color: "bg-emerald-300" },
  ];

  const addTask = useStore((store) => store.addTask);

  /* function addTaskHandler(){
  addTask("hey theres a new task"+column_states)
}
 */

  function openModalHandler() {
    setOpenModal(!openModal);
  }

  function changeTaskFieldHandler(e) {
    setTaskDescription(e.target.value);
  }

  return (
    <main className="max-w-7xl mx-auto text-gray-100 px-3 py-4">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-7">
        {column_states.map((col) => (
          <div className="" key={col.state}>
            <div
              className={`text-gray-700 font-semibold flex items-center justify-between my-4 ${col.color} py-3 px-5 rounded-lg text-xl`}
            >
              <h2>{col.state}</h2>
              <button
                className="border rounded-lg border-gray-600 p-1.5"
                onClick={openModalHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-950"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <Column state={col.state} color={col.color} />
          </div>
        ))}
      </div>
      {openModal && (
        <Modal
          changeTaskFieldHandler={changeTaskFieldHandler}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
        />
      )}
    </main>
  );
}
