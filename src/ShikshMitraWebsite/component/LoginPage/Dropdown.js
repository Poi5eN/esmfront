import React, { useState } from "react";

function Dropdown( {formdata , setformdata} ) {
  const [selectedRole, setSelectedRole] = useState("admin");
  const roleOptions = ["admin", "student", "teacher", "parent"];

  const handleRoleChange = (event) => {
    // setSelectedRole(event.target.value);
    setformdata(
      (prevdata) => {
        return {
          ...prevdata,
          Role : event.target.value,
        }
      }
    )
  };

  return (
    
 
  <select id="role" onChange={handleRoleChange} value={formdata.Role} 
  className="w-full text-center p-2 rounded-md border-none outline-none"
  // style={{ width: '100%',textAlign: 'center' }}
  >
    {roleOptions.map((option) => (
      <option key={option} value={option}>
        {option.toUpperCase()}
      </option>
    ))}
  </select>


  );
}

export default Dropdown;
