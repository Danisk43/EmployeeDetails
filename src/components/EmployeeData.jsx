import React from 'react'

const EmployeeData = ({data}) => {
    console.log(data)
const {name,age,address,salary,married,department}=data
  return (
      <>
    <p>NAME:{name}</p>
    <p>AGE:{age}</p>
    <p>ADDRESSS:{address}</p>
    <p>SALARY:{salary}</p>
    <p>MARRIED:{married?"YES":"NO"}</p>

    </>
  )
}

export default EmployeeData