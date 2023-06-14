import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(location.state.title);
    setDescription(location.state.description);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      `https://task-manager-backend-rnsc.onrender.com/tasks/${location.state.id}`,
      { title: title, description: description }
    );
    if (!response.ok) {
      alert("Saved Changes!");
      navigate("/");
    } else {
      alert("Some Error Occurred! Please Try Again.");
    }
  };

  return (
    <div className="h-[100vh] w-full bg-gray-800 p-10 text-white">
      <h1 className="text-center text-3xl font-bold m-10">Task Manager App</h1>
      <div className="grid grid-cols-1 space-y-4 lg:w-[60%] mx-auto">
        <div className="border border-gray-300 p-10 rounded-md">
          <h1 className="text-xl font-bold">Edit Your Task</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label
                className="block text-gray-300 text-sm mb-2"
                htmlFor="title"
              >
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
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
