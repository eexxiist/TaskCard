import type { TaskCardProps } from "../../types";

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};