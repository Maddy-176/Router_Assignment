import React from 'react';
import { useNavigate } from 'react-router-dom';


import useFetch from "./reusable/FetchData";
import Button from './reusable/Button';



export default function PostList() {

  const navigate= useNavigate();

  const [data]=useFetch("posts")

  const tableStyle={
    "width":"80%",
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
    <h2>Posts List</h2>
    {console.log("data",data)}
    <div style={btnContainerStyle}>
    <Button style={buttonStyle} buttonText={"Back"}  action={()=>navigate(-1)}/>
    </div>
    <div style={tableContainer}>
    <table  style={tableStyle} className="table table-bordered">
      <thead style={tableHead}>
        <tr>
          <th>Title</th>
          <th>Descreption</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post,index)=>
        <tr key={post.id}>
          <td>{post.title}</td>
          <td >{post.body}</td>
        </tr>
        )}
      </tbody>

    </table>
    </div>
    </>
  )
}

