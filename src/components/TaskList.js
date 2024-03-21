import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (task) => {
    setTaskList(taskList.filter((t) => t !== task));
  };

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task key={task.text} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;