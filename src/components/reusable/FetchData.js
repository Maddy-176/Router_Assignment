import React,{useState, useEffect} from 'react'

const baseUrl= "https://jsonplaceholder.typicode.com/"

function FetchData(param) {

  const [data, setData]= useState([{}]);

  useEffect(()=>{
    (async ()=>{
    const response= await fetch(`${baseUrl}${param}`)
    const resData= await response.json();
    setData(resData);
    })();
  },[baseUrl])

  return [data];
  
}

export default FetchData