import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#3556AB] text-white p-4 flex justify-center items-center">
      <h1 className="text-[20px]">{title}</h1>
    </div>
  );
};

export default Header;
