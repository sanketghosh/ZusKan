import React from "react";

export default function Modal({
  changeTaskFieldHandler,
  taskDescription,
  setTaskDescription,
}) {
  function formSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] w-full h-full top-0 left-0">
      <div className="modalCard">
        <h1 className="text-xl font-semibold mb-5">Add To Your Task</h1>

        <form onSubmit={formSubmitHandler}>
          <textarea
            className="w-full lg:h-48 h-44 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-3 text-sm"
            value={taskDescription}
            onChange={changeTaskFieldHandler}
          ></textarea>

          <div className="mt-6 flex gap-5 w-full justify-end items-center text-xs md:text-sm lg:text-base text-gray-100 font-medium">
            <button
              className="px-5 py-1.5 bg-purple-600 hover:bg-purple-700 transition rounded-md"
              type="submit"
            >
              Save
            </button>
            <button
              className="px-5 py-1.5 bg-red-500 hover:bg-red-600 transition rounded-md"
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
