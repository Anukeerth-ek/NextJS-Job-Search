"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Homepage from "@/components/Homepage";

const UseFetch = () => {
     const [data, setData] = useState<any>();
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchData = async () => {
               const axios = require("axios");

               const options = {
                    method: "GET",
                    url: "https://jsearch.p.rapidapi.com/search",
                    params: {
                         query: "Python developer in Texas, USA",
                         page: "1",
                         num_pages: "1",
                    },
                    headers: {
                         "X-RapidAPI-Key": "4bf622eb5dmshc91bed34661df1dp1ec786jsncaab82fcb087",
                         "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                    },
               };

               try {
                    const response = await axios.request(options);
                    // console.log(response.data.data[3]);
                    setData(response.data.data)
               } catch (error) {
                    console.error(error);
               }
          };

          fetchData();
     }, []);

     return (<div>
         <Homepage data={{ data: data }}/>
     </div>);
};

export default UseFetch;
