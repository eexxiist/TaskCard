import { useState } from "react";
import type { TaskCardProps, TaskStatus } from "../../types";

export const TaskCard = ({ task }: TaskCardProps) => {
    const [status, setStatus] = useState<TaskStatus>(task.status)
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{status}</span>
    </div>
  );
};