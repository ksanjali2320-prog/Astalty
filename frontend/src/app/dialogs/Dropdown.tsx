"use client";
import { useState } from "react";

import { ChevronDown } from "lucide-react";

interface DropdownItem {
  title: string;
  description: string;
  href?: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 text-white hover:text-gray-300"
      >
        <span>{label}</span>
        <ChevronDown size={16} />
      </button>

      {/* Dropdown Dialog */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-700 rounded-lg shadow-lg p-4 space-y-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="block hover:bg-gray-50 rounded-lg p-2"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
