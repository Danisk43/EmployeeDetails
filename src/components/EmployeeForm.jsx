import React from 'react'

const EmployeeForm = ({handleChange,handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="NAME" onChange={(e)=>handleChange(e.target)}/><br/>
                    <input type="number" name="age" placeholder="AGE" onChange={(e)=>handleChange(e.target)}/><br/>
                        <input type="text" name="address" placeholder="ADDRESS" onChange={(e)=>handleChange(e.target)}/><br/>
                            <select name="department" onChange={(e)=>handleChange(e.target)}>
                            <option value="">SELECT DEPARTMENT</option>
                        
                                <option value="IT">IT</option>
                                <option value="HR">HR</option>
                                <option value="FINANCE">FINANCE</option>
                                <option value="MARKETING">MARKETING</option>
                        

                            </select>
                            <br/>
                            <input type="number"name="salary" onChange={(e)=>handleChange(e.target)}/>
                            <br/>
                            <label>MARRIED
                           <input type="checkbox" name="married"onChange={(e)=>handleChange(e.target)}/>
                           </label>
                           <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                    )
}

                    export default EmployeeForm