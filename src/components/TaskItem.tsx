import React from 'react';
import "./style.module.css"; // Directly import the CSS file

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onToggleCompletion: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onToggleCompletion }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow">
      <div className="flex items-center">
        {/* Custom checkbox with round styles */}
        <div className="round"> {/* Use the CSS class directly */}
          <input
            type="checkbox"
            id={`checkbox-${task.id}`} // Use a unique id for each checkbox
            checked={task.completed}
            onChange={onToggleCompletion}
          />
          <label htmlFor={`checkbox-${task.id}`}></label>
        </div>

        <span className={`ml-8 ${task.completed ? 'line-through text-gray-500' : 'text-[#071D55]'}`}>
          {task.name}
        </span>
      </div>
      <button onClick={onEdit} className="text-[#071D55] font-[500] border border-[#071D55] px-2 py-1 rounded-[4px]">
        Edit
      </button>
    </div>
  );
};

export default TaskItem;
