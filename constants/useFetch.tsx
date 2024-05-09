"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = () => {
     const [data, setData] = useState(null);
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
                         "X-RapidAPI-Key": "",
                         "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                    },
               };

               try {
                    const response = await axios.request(options);
                    console.log(response.data.data[0]);
               } catch (error) {
                    console.error(error);
               }
          };

          // fetchData();
     }, []);

     return <div>fetch hook</div>;
};

export default UseFetch;
