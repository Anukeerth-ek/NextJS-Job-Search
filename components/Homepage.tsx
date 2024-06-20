"use client"

import React, { useState, useEffect } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { jobs } from "@/data/Data";
import Image from "next/image";
import image from '../public/icon.png'


const Homepage = ({ data }: any) => {
     const [apiData, setApiData] = useState<any[]>([])

     const router = useRouter();
     // HANDLE JOB DETAILS
    const handleJobDetails = (item:any, event:any) => {
     // Assuming item.id is the unique identifier for each job item
     router.push(`/jobs/${item.job_id}`);
   };

     useEffect(() => {
          if (data && data.data) {
               setApiData(data.data);
          }
          console.log("data", apiData);
     }, [data]);

     const formatDate = (dateString: string) => {
          const date = new Date(dateString);
          const currentDate = new Date();
          const difference = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24)); // Difference in days
          if (difference === 0) {
               return "Today";
          } else if (difference === 1) {
               return "Yesterday";
          } else if (difference < 31) {
               return `${difference} days ago`;
          } else {
               const monthsAgo = Math.floor(difference / 31);
               if (monthsAgo === 1) {
                    return "1 month ago";
               } else {
                    return `${monthsAgo} months ago`;
               }
          }
     };

     return (
          <div className="flex flex-wrap w-[980px]">
              {apiData.map((item: any, index: number) =>
               (
                    <div key={index} className="bg-white p-3 mb-3 w-[310px] mr-4 rounded-xl cursor-pointer"   onClick={(event) => handleJobDetails(item, event)} >
                         <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                   <div className="bg-gray-100 p-2 rounded-lg">
                                        <img
                                             src={
                                                  item.employer_logo
                                                       ? item.employer_logo
                                                       : {image}
                                             }
                                             className="w-6 h-8 object-fill "
                                        />
                                   </div>
                                   <div>
                                        <h3 className="font-bold ml-2 text-[18px]">
                                             {item.job_title.length > 20
                                                  ? item.job_title.slice(0, 20) + " ..."
                                                  : item.job_title}
                                        </h3>
                                        <h6 className="ml-2 text-gray-500 text-[14px]">
                                             {item.employer_name.length > 12
                                                  ? item.employer_name.slice(0, 12) + "..."
                                                  : item.employer_name}
                                        </h6>
                                   </div>
                              </div>
                              <CiBookmarkPlus className="text-xl" />
                         </div>

                         <ul className="flex mt-2">
                              <li className="bg-gray-100 p-[6px] rounded-lg text-[12px] font-semibold mr-1 text-gray-500">
                                   {item.job_employment_type}
                              </li>
                              <li className="bg-gray-100 p-[6px] rounded-lg mr-1 text-[12px] font-semibold text-gray-500">
                                   Expert
                              </li>
                              <li className="bg-gray-100 p-[6px] rounded-lg text-[12px] font-semibold mr-1 text-gray-500">
                                   Remote
                              </li>
                         </ul>
                         <div className="flex justify-between items-center mt-3">
                              <span className="flex items-center text-[14px] font-medium">
                                   <AiOutlineDollar className="text-blue-500 text-lg mr-[2px] " />
                                   {item.job_max_salary ? item.job_max_salary + "K/month" : "32K/month"}
                              </span>
                              <span className="text-[14px] text-gray-400">
                                   {formatDate(item.job_posted_at_datetime_utc)}
                              </span>
                         </div>
                    </div>
               )
               )}
          </div>
     );
};

export default Homepage;
