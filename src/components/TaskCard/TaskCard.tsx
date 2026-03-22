import { useState } from "react";
import type { TaskCardProps, TaskStatus } from "../../types";
import "../TaskCard.css";

export const TaskCard = ({ task }: TaskCardProps) => {
    const [status, setStatus] = useState<TaskStatus>(task.status);
    const isDone = status === "done";

    const getNextStatus = (current: TaskStatus): TaskStatus => {
        switch (current) {
            case "todo":
                return "in-progress";
            case "in-progress":
                return "done";
            case "done":
                return "todo";
        }
    };

    const handleNextStatus = () => {
        setStatus(getNextStatus(status));
    };
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.priority}</span>
            <span>{status}</span>

            <button onClick={handleNextStatus} disabled={isDone}>
                Next status
            </button>
        </div>
    );
};
