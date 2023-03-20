import React from 'react';
import { IconType } from 'react-icons';
import { FiChevronDown } from 'react-icons/fi';

interface SidebarRowProps {
  src?: string;
  Icon?: IconType;
  title: string;
}

function SidebarRow({ src, Icon, title }: SidebarRowProps) {
  return (
    <div className='sidebarRow flex items-center p-4 cursor-pointer hover:bg-gray-200 rounded-lg'>
      
      {Icon && <Icon className='text-green-500 text-2xl' />}
      <h4 className='ml-5 font-medium'>{title}</h4>
      <FiChevronDown className='ml-auto text-gray-500 text-xl' />
    </div>
  );
}

export default SidebarRow;
