
'use client';
// Add "use client" if your file uses:
// useState
// useEffect
// Event handlers (onClick, onChange, etc.)
// Browser-only code (e.g. window, localStorage)

import Image from "next/image";
import Link from 'next/link';


import {useState} from 'react';

export default function Home() {

  const [show,setShow] = useState(false)

  // min-h-screen - minimum height = 100% of the viewport height

  return (
    <div className="min-h-screen bg-blue-500 h-40">

      <div id = "topMenus" className = "w-full h-[80px] bg-red-500 flex items-center">
        {/* h-[100px] - static height */}

        <img
          src="/images/hospital-svgrepo-com.svg"
          alt="Hospital Logo"
          className="w-[50px] h-[50px] ml-4"
          // ml-4 - marginleft
        />


        <div className="flex-1 flex justify-center space-x-8 text-white font-medium">
          <a href="#" className="hover:underline">Reviews</a>
          <a href="#" className="hover:underline">Solutions</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Company</a>
          <a href="#" className="hover:underline">Pricing</a>
        </div>

        {/* Place my-image.jpg in the public/ folder (not src/)
        w-full → full width
        h-auto → auto height based on image ratio */}

        <div id="loginSignUpBtns" className="ml-auto flex space-x-4 mr-5">

        {/* In Next.js App Router, every route must have a page.jsx 
        or page.tsx file inside a folder */}

          <Link href="/login">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
          <button 
        className="bg-white text-blue-600 px-4 py-2 rounded-md border border-white-500 hover:bg-black-100 transition">
        Signup
        </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
