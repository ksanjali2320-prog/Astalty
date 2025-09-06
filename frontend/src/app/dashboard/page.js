
'use client';
// Add "use client" if your file uses:
// useState
// useEffect
// Event handlers (onClick, onChange, etc.)
// Browser-only code (e.g. window, localStorage)

import Image from "next/image";
import Link from 'next/link';
import { FaHome, FaTasks, FaCalendarAlt, FaUsers, FaCog } from "react-icons/fa";


import {useState} from 'react';

const menuItems = [
  { label: "Dashboard", icon: FaHome },
  { label: "Tasks", icon: FaTasks },
  { label: "Calendar", icon: FaCalendarAlt },
  { label: "Participants", icon: FaUsers },
  { label: "Settings", icon: FaCog },
];

export default function page() {

  const [show,setShow] = useState(false)

  // min-h-screen - minimum height = 100% of the viewport height

  return (
    <div className="min-h-screen bg-[#000000] h-40">
<div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-4 font-bold text-xl">Astalty</div>
        <nav className="flex-1 px-2 space-y-1">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-800"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <button className="text-sm px-3 py-1 border rounded">Support</button>
            <button className="text-sm px-3 py-1 border rounded">User Guide</button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-900 text-white px-4 py-1 rounded">
              + Create Task
            </button>
            <div className="relative">
              <span className="absolute -top-1 -right-2 bg-blue-900 text-white text-xs px-1 rounded-full">
                17
              </span>
              🔔
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              MR
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-4 bg-gray-100">
          <p>This is the layout</p>
        </div>
      </div>
    </div>
    </div>
  );
}
