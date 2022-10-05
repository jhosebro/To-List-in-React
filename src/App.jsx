import Todolist from "./components/Todolist.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <div className="bg-blue-700 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Todolist />
      </div>
    </div>
  );
}

export default App;
