import { experienceLevel, jobProfiles, jobType, sortType, positionType } from "@/data/Data";
import React from "react";

const Aside = () => {
     return (
          <aside>
               <div className="w-[260px] bg-white px-4 rounded-lg">
                    <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
                         <h3 className="font-semibold text-lg">Filters</h3>
                         <h3 className="text-red-400 font-bold text-md">Clear All</h3>
                    </div>

                  {/* SORT BY */}
                  <div className="py-[10px] border-b border-b-gray-300">
                         <div className="flex justify-between pb-3 font-bold">
                              <h3 className="text-blue-500">Sort By</h3>
                         </div>
                         <ul className="flex flex-wrap">
                              {/* Add flex-wrap class to the ul element to allow wrapping */}
                              {sortType?.map((item: string, index: number) => (
                                   <li key={index} className="flex mb-2 mr-4">
                                        {/* Add flex class to the li element to make it flex container */}
                                        <input type="radio" />
                                        <h3 className="ml-2 font-normal text-sm">{item}</h3>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    {/* JOB TYPE */}
                    <div className="py-[10px] border-b border-b-gray-300">
                         <div className="flex justify-between pb-3 font-bold">
                              <h3 className="text-blue-500">Job Type</h3>
                         </div>
                         <ul className="flex flex-wrap">
                              {/* Add flex-wrap class to the ul element to allow wrapping */}
                              {jobType?.map((item: string, index: number) => (
                                   <li key={index} className="flex mb-2 mr-4">
                                        {/* Add flex class to the li element to make it flex container */}
                                        <input type="checkbox" />
                                        <h3 className="ml-2 font-normal text-sm">{item}</h3>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    {/* EXPERIENCE SECTION */}
                    <div className=" font-bold py-[10px] border-b border-b-gray-300">
                         <h3 className="pb-3 text-blue-500">Experience Level</h3>
                         <ul className="flex flex-wrap">
                              {experienceLevel[0].levels?.map((level: string, index: number) => (
                                   <li className="flex mb-2 justify-between items-center mr-3" key={index}>
                                        <div className="flex">
                                             <input type="checkbox" />
                                             <h3 className="ml-2 font-normal text-sm">{level}</h3>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                    </div>
                    {/* JOB TYPE SECTION */}
                    <div className=" font-bold py-[10px] border-b border-b-gray-300">
                         <h3 className="pb-3 text-blue-500">Position Type</h3>
                         <ul className="flex flex-wrap">
                              {positionType?.map((type: string, index: number) => (
                                   <li className="flex mb-2 justify-between items-center mr-3" key={index}>
                                        <div className="flex">
                                             <input type="checkbox" />
                                             <h3 className="ml-2 font-normal text-sm">{type}</h3>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                    </div>
                    {/* JOB PROFILES SECTION */}
                    <div className=" font-bold pt-5">
                         <h3 className="pb-3 text-blue-500">Job Profiles</h3>
                         <ul>
                              {jobProfiles?.map((items: string, index: number) => (
                                   <li className="flex mb-2 justify-between items-center">
                                        <div className="flex">
                                             <input type="checkbox" />
                                             <h3 className="ml-2 font-normal text-sm">{items}</h3>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
          </aside>
     );
};

export default Aside;
