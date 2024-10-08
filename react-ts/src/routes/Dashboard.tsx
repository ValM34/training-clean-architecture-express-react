import { useEffect, useState, useContext } from "react";
import CreateTaskForm from "../components/CreateTaskForm";
import { AppContext } from '../AppContextProvider';

interface Task {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const accessToken = localStorage.getItem("accessToken");
  const context = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!accessToken) return;
        const data = await fetch("http://localhost:8000/tasks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        });
        const response = await data.json();
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    (async () => {
      const data = await fetchData();
      if (context.data.tasks === undefined) {
        // setTasks(data);
        context.setData({
          ...context.data,
          tasks: data
        })
      }
    })();
  }, [tasks, accessToken, context]);

  console.log(context.data.tasks);

  return (
    <div className="flex justify-center align-center p-20">
      <div className="bg-gray-100 rounded-xl w-3/4 min-h-60 p-6">
        {accessToken ? (
          <>
            <ul>
              {context.data?.tasks ? (
                context.data?.tasks.map((task: Task) => {
                  return (
                    <li key={task.id}>
                      <p>
                        <b>{task.title}</b> {task.description}{" "}
                        {task.isDone ? "Fait" : "A faire"}
                      </p>
                    </li>
                  );
                })
              ) : "Loading..."}

            </ul>
            <CreateTaskForm />
          </>
        ) : (
          "Vous n'êtes pas connecté"
        )}
      </div>
    </div>
  );
}

export default App;
