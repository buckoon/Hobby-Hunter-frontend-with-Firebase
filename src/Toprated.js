import React from 'react';
import SidebarRow from './SidebarRow';
import { RiFlag2Line } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { BiMessageSquare } from 'react-icons/bi';

import { RiVideoLine } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa';

function Toprated() {
  return (
    <div className="flex flex-[0.2] flex-col h-fit sticky bg-opacity-40 bg-white  top-[80px] rounded-lg  text-green-600 text-center border-b border-gray-600">
      <SidebarRow Icon={RiFlag2Line} title='Saved Hobbies' />
      <SidebarRow Icon={FaUserFriends} title='Friends' />
      <SidebarRow Icon={BiMessageSquare} title='Messenger' />
      
      <SidebarRow Icon={RiVideoLine} title='Videos' />
      <SidebarRow Icon={FaAngleDown} title='More' />
    </div>
  )
}

export default Toprated;