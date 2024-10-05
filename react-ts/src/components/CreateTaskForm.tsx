import { useRef } from 'react';

export default function CreateTaskForm() {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleInputRef.current?.value;
    const content = contentInputRef.current?.value;
    
    fetch('http://localhost:3000/api/task/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " ref={titleInputRef} />
      </div>
      <div className="mb-5">
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
        <input type="text" id="content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " ref={contentInputRef} />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none">Create</button>
    </form>
  )
}