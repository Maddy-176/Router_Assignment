import React from 'react'
import { useNavigate } from 'react-router-dom';


import useFetch from "./reusable/FetchData"
import Button from './reusable/Button';


function UsersList() {
    
  const [data]=useFetch("users")

  const navigate= useNavigate();

  const tableStyle={
    "width":"90%",
    "textAlign":"justify",
    "border":"1px solid grey"
  }

  const tableContainer={
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "marginTop":"3%"
  }

  const tableHead={
    "textAlign":"center",
  }

  const buttonStyle={
    "fontWeight":"600",
    "backgroundColor":"green",
    "color":"white"
   }

   const btnContainerStyle={
    "display":"flex",
    "alignItems":"flex-start",
    "marginLeft":"5%"
   }
  
  return (
    <>
    <h2>User Details</h2>
    {console.log("data",data)}
    <div style={btnContainerStyle}>
    <Button style={buttonStyle} buttonText={"Back"}  action={()=>navigate(-1)}/>
    </div>
    <div style={tableContainer}>
    <table style={tableStyle} className="table table-bordered">
      <thead style={tableHead}>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email Address</th>
          <th>Phone#</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user)=>
        <tr key={user.id}>
          <td>{user.name}</td>
          <td >{user.username}</td>
          <td >{user.email}</td>
          <td >{user.phone}</td>

        </tr>
        )}
      </tbody>

    </table>
    </div>
    </>
  )
}

export default UsersList