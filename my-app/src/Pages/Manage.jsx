import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Manage() {
    const [data,setData]=useState([]);
    const navigate=useNavigate(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const res=await axios.get("http://localhost:8080/api/display");
                console.log(res.data);
                setData(res.data);
            }
            catch(err){
                console.log(err);
                alert(err.response.data.msg);
            }
        }
        fetchData();


    },[])

    const deleteUser=async(id)=>{
        try{
            const res=await axios.delete(`http://localhost:8080/api/delete/${id}`);
            console.log(res.data.msg);
            setTimeout(()=>{
                location.reload();
            },2000)
        }
        catch(err){
            console.log(err.response.data.msg);
        }
    }

    const updateUser=(data)=>{
        navigate("/update-user",{state:data});
    }


  return (
  <>
  <div className="manage-container">
  {data.map((val,i)=>(
    <div key={i} className='manage-conatiner-item'>
        <h4><b>Name:</b> {val.name}</h4>
        <h4><b>E-mail:</b> {val.email}</h4>
        <h4><b>Password:</b> {val.password}</h4>
        <br/><hr/><br/>
        <div className="manage-item-btn">
        <button onClick={()=>deleteUser(val._id)}>Delete</button>
        <button onClick={()=>updateUser(val)}>Update</button>
        </div>
    </div>
    
  ))}
  </div>

  </>
  )
}

export default Manage