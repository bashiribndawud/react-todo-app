import React from 'react';
import TaskItem from '../components/TaskItem';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onToggleCompletion }) => {
  return (
    <div className="space-y-2 ">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => onEdit(task.id)}
          onToggleCompletion={() => onToggleCompletion(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
