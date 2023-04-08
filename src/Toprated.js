import React from 'react';
import SidebarRow from './SidebarRow';
import { RiFlag2Line } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { BiMessageSquare } from 'react-icons/bi';
import { RiVideoLine } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa';

function Toprated() {
  const handleSidebarRowClick = () => {
    alert("Coming soon!");
  };

  return (
    <div className="flex flex-[0.2] flex-col h-fit sticky bg-opacity-40 bg-white  top-[80px] rounded-lg  text-black text-center border-b border-gray-600">
      <SidebarRow Icon={RiFlag2Line} title='Saved Hobbies' onClick={handleSidebarRowClick} />
      <SidebarRow Icon={FaUserFriends} title='Friends' onClick={handleSidebarRowClick} />
      <SidebarRow Icon={BiMessageSquare} title='Messenger' onClick={handleSidebarRowClick} />
      <SidebarRow Icon={RiVideoLine} title='Videos' onClick={handleSidebarRowClick} />
      <SidebarRow Icon={FaAngleDown} title='More' onClick={handleSidebarRowClick} />
    </div>
  )
}

export default Toprated;
