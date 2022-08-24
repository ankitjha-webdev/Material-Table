import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import msslLogo from '../../assets/msslIcon.png'
import profile from '../../assets/undraw_male_avatar_323b.svg'
import { RiUserSearchFill } from 'react-icons/ri'
import { FaSearch, FaTachometerAlt } from 'react-icons/fa'

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-800 hover:text-red-600 font-sans"
      >
        <a href="/" className="flex items-center">
          <RiUserSearchFill size={18} className="mr-1" />
          Applicant
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-800 hover:text-red-600 font-sans"
      >


        <a href="/" className="flex items-center">
          <FaTachometerAlt size={18} className="mr-2" />
          Dashboard
        </a>
      </Typography>


      <div className="absolute right-64">
        <Input label="Search" variant="outlined" color="red" className="w-full lg:w-auto" icon={<FaSearch />} />
      </div>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <section className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 shadow-md hover:shadow-lg rounded">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal flex flex-row-reverse text-center items-center justify-center"
        >
          <img src={msslLogo} alt="logo" className="w-8 h-8 pb-1 " />  <span className='font-medium text-base text-grey-800 hidden md:block'><small className='text-base text-red-700 font-sans font-extrabold'>motherson</small></span>
        </Typography>

        <div className="hidden lg:block">{navList}</div>

        <Button variant="text" color="red" className="hidden lg:inline-block p-1 m-0 rounded-full shadow-lg hover:shadow-2xl">
          <img src={profile} alt="Profile" className="w-10 h-10" />
        </Button>


        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" color="red" fullWidth className="mb-2">
          <span>Sign in</span>
        </Button>
      </MobileNav>
    </section>
  );
}