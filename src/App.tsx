import React, { useState } from "react";
import EditTaskForm from "./components/EditTaskForm";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Training at the Gym", completed: true },
    { id: 2, name: "Play Paddle with friends", completed: false },
    { id: 3, name: "Burger BBQ with family", completed: false },
  ]);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const editTask = (id: number, newName: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setSelectedTask(null);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex h-screen bg-[#F3F3F3]">
      {/* Sidebar Component */}
      <Sidebar
        onAddTask={() => addTask("New Task")}
        tasks={tasks}
        setSelectedTask={setSelectedTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header title={ "Edit Task"} />
        <div className="flex-1 p-4 overflow-auto">
          {/* Edit Task Form */}
          {selectedTask !== null && (
            <EditTaskForm
              task={tasks.find((task) => task.id === selectedTask)!}
              onSave={(name) => {
                editTask(selectedTask, name);
                setSelectedTask(null);
              }}
              onDelete={() => deleteTask(selectedTask)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
