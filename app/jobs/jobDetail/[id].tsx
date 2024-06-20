import React from 'react'

const JobDetails = ({params}:any) => {
  console.log("params", params)
  return (
    <div>{params}</div>
  )
}

export default JobDetails