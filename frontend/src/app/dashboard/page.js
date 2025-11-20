"use client";

import { useState } from "react";
import { FaHome, FaTasks, FaCalendarAlt, FaUsers, FaCog } from "react-icons/fa";
import UserDropdown from "../components/userDropdown";
import MultiDropdown from "../components/multiDropdown";

const menuItems = [
  {
    label: "Tasks",
    icon: FaTasks,
    hasDropdown: true,
    dropdownItems: [
      { label: "Test 1" },
      { label: "Test 2" },
    ],
  },
  { label: "Calendar", icon: FaCalendarAlt },
  { label: "Participants", icon: FaUsers },
  {
    label: "Settings",
    icon: FaCog,
    hasDropdown: true,
    dropdownItems: [
      { label: "Test 3" },
      { label: "Test 4" },
    ],
  },
];

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-auto">
      <div className="flex">
        {/* Header */}
        <div className="text-[#232323] flex justify-between items-center w-screen p-4 shadow-[2px_2px_2px_rgba(0,0,0,0.1)]">
          <div className="font-bold text-xl">Astalty</div>

          <nav className="flex">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                {item.hasDropdown ? (
                  <MultiDropdown
                    key={idx}
                    dropdownTitle={item.label}
                    dropdownMenuItems={item.dropdownItems}
                  />
                ) : (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-[#f2f2f2] transition-all ease-linear"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="flex">
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
