import React,{useEffect, useState} from 'react'
import axios from 'axios';
import './stylePages.css';
import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function Signup() {
    const [userData,setUserData]=useState({name:'',email:'',password:'',cpassword:''});
    const navigate=useNavigate(null);
    const handleChange=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value});
    }
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
        try{
        const res=await axios.post('http://localhost:8080/api/insert',userData);
        ToastSuccess(res.data.msg);
        setTimeout(()=>{
          navigate("/manage-user");
        },3000)
        }
        catch(err){
          console.log(err);
          ToastError(err.response.data.msg);
        }
    }

    const ToastSuccess=(msg)=>{
        toast.success(msg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
          });
      }
   const ToastError=(msg)=>{
    toast.error(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
      });

   }

  return (
    <>
    <center><div className="signup-container">
    <h1>Register.</h1>
    <form className='signup-item' onSubmit={handleSubmit}>
      <input type='text' name='name' required placeholder='Name' value={userData.name} onChange={handleChange}/>
      <input type='email' name='email' required placeholder='Email' value={userData.email} onChange={handleChange}/>
      <input type='password' required name='password' placeholder='Password' value={userData.password} onChange={handleChange}/>
      <input type='password' required name='cpassword' placeholder='Confirm Password' value={userData.cpassword} onChange={handleChange}/>

    <button type='submit'>Submit</button>
    </form>
    </div>
    </center>
    <ToastContainer
position="top-center"
autoClose={2000}
limit={2}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default Signup