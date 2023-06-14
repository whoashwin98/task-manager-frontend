import React, { useEffect, useState } from "react";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    const response = await fetch(
      "https://task-manager-backend-rnsc.onrender.com/tasks",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    getAllTasks();
  }, [tasks]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300 p-10 rounded-md">
      <h2 className="md:col-span-2 mb-5 text-xl font-bold">
        {tasks.length > 0 ? "Your Tasks" : "Add A Task To Get Started!"}
      </h2>
      {tasks.map(({ _id, title, description, isDone }) => {
        return (
          <Task
            key={_id}
            id={_id}
            title={title}
            description={description}
            isDone={isDone}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
