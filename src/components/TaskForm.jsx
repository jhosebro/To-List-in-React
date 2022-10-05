import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-green-600 p-10 mb-4 rounded-md "
        >
          <h1 className="text-2xl font-bold text-white mb-3 text-center">Create your task</h1>
          <input
            type="text"
            placeholder="Enter a task"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            autoFocus
            className="bg-white p-3 w-full rounded-md mb-4"
          />
          <textarea
            placeholder="Enter a description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            className="bg-white p-3 w-full rounded-md mb-4"
          />
          <div className="justify-center flex">
          <button type="submit" className="bg-blue-700 text-white px-3 py-1 rounded-md">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
