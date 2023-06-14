import React from "react";
import Tasks from "./components/Tasks";
import CreateTaskForm from "./components/CreateTaskForm";

const HomePage = () => {
  return (
    <div className="w-full bg-gray-800 p-10 text-white">
      <h1 className="text-center text-3xl font-bold m-10">Task Manager App</h1>
      <div className="grid grid-cols-1 space-y-4 lg:w-[60%] mx-auto">
        <CreateTaskForm />
        <Tasks />
      </div>
    </div>
  );
};

export default HomePage;
