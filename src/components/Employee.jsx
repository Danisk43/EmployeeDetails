import React from 'react'
import EmployeeData from './EmployeeData'
import EmployeeForm from './EmployeeForm'

const Employee = () => {
 const init={
     name:"",
     age:"",
     address:"",
     department:"",
     salary:"",
     married:false
 }
const [first,setFirst]=React.useState(init)
const [data,setData]=React.useState([])

const handleChange=({name,value,type,checked})=>{
    console.log(checked)
        setFirst({...first,[name]:type==="checkbox"?checked:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
        fetch("http://localhost:3004/first",{
        method:"POST",
        body:JSON.stringify(first),
        headers:{"Content-Type":"application/json"}
    })
    
}

const getData=()=>{
    fetch("http://localhost:3004/first")
    .then((data)=>(data.json()))
    .then((data)=>setData([...data]))
}
React.useEffect(()=>{
    getData()
},[])


  return (
      <>
    <EmployeeForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    {data.map((e)=><EmployeeData data={e}/>)}
    </>
  )
}

export default Employee