"use client";
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import RegisterModal from '@/components/register/RegisterModal';

const navItems = [
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
    {label: "Courses", href: "/courses"},
]

export default function NavBar() {
    const [registerForm, setRegisterForm] = useState(false);
  return (
   <nav className='bg-white flex  items-center justify-between px-12 py-2 '>

    {/* logo */}
    <div className='h-16 w-36 relative'>
    <Image
    src="/images/logo.png"
    alt='Logo'
    fill
    />
    </div>

    {/* nav items */}
    <ul className='flex space-x-6'>
      {navItems.map((item) => (
        <li key={item.label} className='text-base  '>
          <Link href={item.href} className='text-blue-600 font-medium hover:text-blue-800 '>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>

    <button
    onClick={()=>setRegisterForm(!registerForm)}
     className='bg-blue-600 font-semibold cursor-pointer px-4 py-3 rounded-lg text-white text-sm transition-all duration-150 ease-in
      hover:-translate-y-0.5 hover:scale-102 hover:bg-blue-700 hover:shadow-blue-500/50 hover:shadow-lg '>
        Registration
    </button>

    {
        registerForm && (
            <RegisterModal closeModal={()=> setRegisterForm(false)} />
        )
    }

   </nav>
  )
}
