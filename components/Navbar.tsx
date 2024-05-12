import React from "react";
import { navLink } from "@/data/Data";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
     const platformName: string = "HireU";
     return (
          <nav>
               <div className="flex py-4 items-center ">
                    <h2 className="text-blue-600 text-3xl font-semibold">{platformName}</h2>
                    <ul className="flex  list-none ml-12">
                         {navLink.map((items: string, index: number) => {
                              return (
                                   <li className="mx-[20px] font-semibold text-gray-600 text-base hover:text-black cursor-pointer" key={index}>
                                        {items}
                                   </li>
                              );
                         })}
                    </ul>
                    <div className="flex ml-6">
                         <input
                              type="search"
                              placeholder="Search job here"
                              className="border border-gray-300 ml-10 rounded-3xl pl-3 w-[220px]"
                         />
                         <div className="p-[8px] w-8">
                              <CiSearch className="relative right-10  bg-blue-600 text-white rounded-2xl text-2xl" />
                         </div>
                    </div>
                    <h2 className="text-blue-600 ml-16 font-semibold text-md border border-blue-600 rounded-2xl p-1">
                         {platformName} <span className="text-green-400">360</span>
                    </h2>
                    <IoIosNotificationsOutline className="relative left-[36px] text-3xl rotate-4" />
                    <div className="relative left-[56px] text-3xl border p-2 rounded-3xl flex">
                         <RxHamburgerMenu />
                         <img
                              className="w-6 ml-2"
                              src="data:image/jpeg;base64,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"
                         />
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
