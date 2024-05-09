import { experienceLevel, jobProfiles, jobType } from "@/data/Data";
import React from "react";

const Aside = () => {
     return (
          <aside>
               <div className="w-[240px] pb-5">
                    <div className="flex justify-between pb-3 font-bold ">
                         <h3 className=" text-blue-500">Job Type</h3>
                         <div>
                              <h3 className="text-red-400">Clear All</h3>
                         </div>
                    </div>
                    <ul>
                         {jobType?.map((item: string, index: number) => (
                              <li className="flex mb-2">
                                   <input type="checkbox" />
                                   <h3 className="ml-2 font-medium">{item}</h3>
                              </li>
                         ))}
                    </ul>
               </div>
               {/* EXPERIENCE SECTION */}
               <div className=" font-bold ">
                    <h3 className="pb-3 text-blue-500">Experience Level</h3>
                    <ul>
                         {experienceLevel[0].levels?.map((level: string, index: number) => (
                              <li className="flex mb-2 justify-between items-center" key={index}>
                                   <div className="flex">
                                        <input type="checkbox" />
                                        <h3 className="ml-2 font-medium">{level}</h3>
                                   </div>
                                   <span>
                                        {experienceLevel[1] &&
                                             experienceLevel[1].yearsOfExperience &&
                                             experienceLevel[1].yearsOfExperience[index]}
                                   </span>
                              </li>
                         ))}
                    </ul>
               </div>
               {/* JOB PROFILES SECTION */}
               <div className=" font-bold pt-5">
                        <h3 className="pb-3 text-blue-500">Job Profiles</h3>
                        <ul>
                          {jobProfiles?.map((items:string, index:number)=> (
                            <li className="flex mb-2 justify-between items-center">
                              <div className="flex">
                                <input type="checkbox"/>
                                <h3 className="ml-2 font-medium">{items}</h3>
                              </div>
                            </li>
                          ))}
                        </ul>
               </div>
          </aside>
     );
};

export default Aside;
