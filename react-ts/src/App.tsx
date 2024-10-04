import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("http://localhost:3000/api/task/all");
        const response = await data.json();
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    (async () => {
      const data = await fetchData();
      if (tasks === null) {
        setTasks(data);
      }
    })();
  }, [tasks]);

  console.log(tasks);

  return (
    <div className="flex justify-center align-center p-20">
      <div className="bg-gray-100 rounded-xl w-3/4 min-h-60 p-6">
        <ul>
          {tasks &&
            tasks.map((task: Task) => {
              return (
                <li key={task.id}>
                  <p>
                    <b>{task.title}</b> {task.content}{" "}
                    {task.isDone ? "Fait" : "A faire"}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
