import { TaskCard } from "./components/TaskCard/TaskCard";
import type { Task } from "./types";

const task: Task = {
    title: "Настроить авторизацию",
    description: "Реализовать вход по email и паролю",
    priority: "high",
    status: "todo",
};

function App() {
    return <TaskCard task={task} />;
}

export default App;
