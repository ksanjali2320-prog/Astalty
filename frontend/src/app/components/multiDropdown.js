"use client";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function MultiDropdown({ dropdownTitle, dropdownMenuItems }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-100 transition-all ease-linear"
      >
        <span>{dropdownTitle}</span>
        <FaAngleDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-100 shadow-lg rounded-md z-20">
          <ul className="py-1 text-sm text-gray-700">
            {dropdownMenuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
