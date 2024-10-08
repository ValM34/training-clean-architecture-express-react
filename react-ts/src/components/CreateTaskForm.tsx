import { useRef, useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";

export default function CreateTaskForm() {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const context = useContext(AppContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleInputRef.current?.value;
    const description = descriptionInputRef.current?.value;

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        context.setData({
          ...context.data,
          tasks: context.data.tasks.concat([
            {
              id: "1",
              title: "Tarea 1",
              description: "Descripcion 1",
            },
          ]),
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          ref={titleInputRef}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          ref={descriptionInputRef}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
      >
        Create
      </button>
    </form>
  );
}
