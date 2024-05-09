import UseFetch from '@/constants/useFetch'
import React from 'react'

const Homepage = ({data}:any) => {
  data.data?.forEach((item: any) => {
    console.log("employer_name:", item.employer_name);
});
  return (
    <div>

          <p>hello</p>
    </div>
  )
}

export default Homepage