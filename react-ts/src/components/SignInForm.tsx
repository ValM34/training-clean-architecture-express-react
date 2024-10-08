import { useRef } from 'react';

export default function CreateTaskForm() {
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login = loginInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    
    fetch('http://localhost:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('accessToken', data.accessToken))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900">Login</label>
        <input type="text" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " ref={loginInputRef} />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " ref={passwordInputRef} />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none">SignIn</button>
    </form>
  )
}
