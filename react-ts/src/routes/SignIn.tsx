import SignInForm from "../components/SignInForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if(accessToken) navigate('/dashboard');
  })

  return (
    <div className="flex justify-center align-center p-20">
      <div className="bg-gray-100 rounded-xl w-3/4 min-h-60 p-6">
        <SignInForm />
      </div>
    </div>
  );
}

export default App;
