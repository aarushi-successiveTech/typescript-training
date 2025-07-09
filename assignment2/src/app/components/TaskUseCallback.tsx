"use client";
import { useState, useCallback } from "react";
interface Task {
  id: number;
  name: string;
  completed: boolean;
}

type TaskProps = {
  task: Task;
  onComplete: (id: number) => void;
};

const TaskItem = ({ task, onComplete }: TaskProps) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.name}
      <button
        onClick={() => onComplete(task.id)}
        style={{ marginLeft: "10px" }}
      >
        {task.completed ? "Undo" : "complete"}
      </button>
    </li>
  );
};

export const TaskList = () => {
  const [tasks, setTask] = useState<Task[]>([
    { id: 1, name: "groceries", completed: false },
    { id: 2, name: "assignment", completed: false },
    { id: 3, name: "assignment2", completed: false },
  ]);

  const completeTask = useCallback(
    (taskId: number) => {
      setTask((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTask]
  );

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={completeTask} />
      ))}
    </ul>
  );
};
