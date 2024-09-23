import React,{useEffect, useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const [userData,setUserData]=useState({name:'',email:'',password:''});
    const [id,setId]=useState('');
    const navigate=useNavigate(null);
    const location=useLocation();

    useEffect(()=>{
        try{
            console.log(id);
        const data=location.state;
        if(data){
            setId(data._id)
            setUserData({name:data.name,email:data.email,password:data.password});
        }
    }catch(err){
        console.log("Error");
    }

    },[])
    const handleChange=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.put(`http://localhost:8080/api/update/${id}`,userData);
            console.log(res.data.msg);
            setTimeout(()=>{
                navigate("/manage-user");
            },1000);
        }
        catch(err){
            console.log(err.response.data.msg);
        }
      }
  return (
    <>
    <center><div className="signup-container">
    <h1>Update.</h1>
    <form className='signup-item' onSubmit={handleSubmit}>
      <input type='text' name='name' required placeholder='Name' value={userData.name} onChange={handleChange}/>
      <input type='email' name='email' required placeholder='Email' value={userData.email} onChange={handleChange}/>
      <input type='password' required name='password' placeholder='Password' value={userData.password} onChange={handleChange}/>

    <button type='submit'>Submit</button>
    </form>
    </div>
    </center>
</>
  )
}

export default Update;