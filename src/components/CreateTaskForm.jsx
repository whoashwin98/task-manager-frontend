import { useState } from "react";
import axios from "axios";

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://task-manager-backend-rnsc.onrender.com/tasks/",
      {
        title: title,
        description: description,
      }
    );

    if (response.status == 201) {
      alert("Task Created Successfully!");
      setTitle("");
      setDescription("");
    } else {
      alert("Some Error Occurred! Please Try Again.");
    }
  };

  return (
    <div className="border border-gray-300 p-10 rounded-md">
      <h1 className="text-xl font-bold">Create A Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a Title..."
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe Your Task Here..."
          />
        </div>
        <button
          className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
