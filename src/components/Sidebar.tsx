import React from 'react';
import UserImage from "../assets/Ellipse 2.png";
import TaskList from './TaskList';
import CupIcon from "../assets/Group 27.png"
interface SidebarProps {
  onAddTask: () => void;
  tasks: Array<{ id: number; name: string; completed: boolean }>;
  setSelectedTask: (id: number | null) => void;
  toggleTaskCompletion: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onAddTask, tasks, setSelectedTask, toggleTaskCompletion }) => {
  return (
    <div className="w-80 bg-[#F3F3F3] text-white flex flex-col shadow-2xl">
      {/* Header Section */}
      <div className='bg-[#3556AB] p-[0.4rem]'>
        <div className="flex space-x-2">
          <img
            src={UserImage}
            alt="User"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="text-[14px] text-[#FFFFFF]">Hello, Jhon</p>
            <p className="text-[18px] opacity-70">What are your plans for today?</p>
          </div>
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="bg-[#CDE53D] text-blue-900  px-3 py-6 mb-2 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={CupIcon} alt="Cup" />
            <p className="text-sm font-bold">Go Pro Upgrade Now</p>
          </div>
        </div>
        <span className="bg-[#071D55] text-[#F2C94C] text-xs p-3 absolute right-3 top-0">$1</span>
      </div>

      {/* Task List Section */}
      <div className="flex-1 overflow-auto mx-2">
        <TaskList
          tasks={tasks}
          onEdit={(id) => setSelectedTask(id)}
          onToggleCompletion={toggleTaskCompletion}
        />
      </div>

      {/* Floating Action Button for Adding Tasks */}
      <div className="relative">
        <button
          onClick={onAddTask}
          className="bg-[#123EB1] w-[60px] h-[60px] rounded-full text-white flex items-center justify-center shadow-lg absolute bottom-8 right-3 text-[36px]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
