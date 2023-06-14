import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";

const Task = ({ id, title, description, isDone }) => {
  const handleDelete = async (e) => {
    console.log(e.target);
    const response = await fetch(
      `https://task-manager-backend-rnsc.onrender.com/tasks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      alert("Some Error Occurred! Please Try Again.");
    } else {
      alert("Task Deleted Successfully!");
    }
  };

  const handleIsDone = async () => {
    const response = await axios.patch(
      `https://task-manager-backend-rnsc.onrender.com/tasks/done/${id}`
    );
  };

  return (
    <div className="bg-white rounded-md px-3 py-5 text-black m-3">
      <h3 className="text-l font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-between mt-5">
        <Link
          to={`/edit/${id}`}
          state={{
            id: id,
            title: title,
            description: description,
          }}
        >
          <AiFillEdit className="text-black w-10 h-10 cursor-pointer" />
        </Link>
        {isDone ? (
          <ImCheckboxChecked
            className="cursor-pointer w-6 h-6"
            onClick={handleIsDone}
          />
        ) : (
          <ImCheckboxUnchecked
            className="cursor-pointer w-6 h-6"
            onClick={handleIsDone}
          />
        )}
        <AiFillDelete
          onClick={handleDelete}
          className="text-black w-10 h-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Task;
