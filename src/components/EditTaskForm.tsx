import React, { useState } from 'react';

interface EditTaskFormProps {
  task: { id: number; name: string };
  onSave: (name: string) => void;
  onDelete: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onSave, onDelete }) => {
  const [taskName, setTaskName] = useState(task.name);

  return (
    <div className="p-2 h-[98%] flex flex-col justify-between">
      <div>
      <h2 className="text-xl mb-4">Task Name</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full p-3 mb-4 border border-[#CBCBCB] rounded-[9px]"
      />
      </div>
      <div className="flex space-x-2">
        <button onClick={onDelete} className="bg-[#720D0D] text-white px-4 py-2 rounded-md border border-black">
          Delete
        </button>
        <button onClick={() => onSave(taskName)} className="bg-[#0D2972] text-white px-4 py-2 rounded-md flex-1 border border-black">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTaskForm;
