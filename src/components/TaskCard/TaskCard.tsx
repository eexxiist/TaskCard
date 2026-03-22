import { useState } from "react";
import type { TaskCardProps, TaskStatus } from "../../types";
import "./TaskCard.css";

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
        <div className="card">
            <h3 className="title">{task.title}</h3>
            <p className="description">{task.description}</p>
            <div className="badges">
                <span className={`badge priority ${task.priority}`}>{task.priority}</span>
                <span className={`badge status ${status}`}>{status}</span>
            </div>

            <button onClick={handleNextStatus} disabled={isDone}>
                Next status
            </button>
        </div>
    );
};
