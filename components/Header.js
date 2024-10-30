import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="container mx-auto py-5  lg:px-20 flex justify-between items-center gap-5">
        <img src="/logo.png" className="md:w-[16%] w-[40%] pl-5" alt="Logo"  />
      
        <ul className="flex gap-5 sm:gap-10 md:gap-20 w-auto md:w-[60%] text-[13px] font-[500]">
          <Link href="#" className="cursor-pointer text-sm  ">Home</Link>
          <Link href="#features" className="cursor-pointer text-sm  ">Features</Link>
          <Link href="#about" className="cursor-pointer text-sm  ">About</Link>
        </ul>
      </div>
      
    )
}

export default Header