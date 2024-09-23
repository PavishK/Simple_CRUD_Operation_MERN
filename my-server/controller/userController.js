import User from "../models/userModel.js";

export const insert=async(req,res)=>{
    console.log("Request -> ",req.body.name);
   const cpassword=req.body.cpassword;
    try{
        const newUser=new User(req.body);
        const{email,password}=newUser;
        const exist=await User.findOne({email});
        console.log(exist);
        if(exist){
            return res.status(400).json({msg:"User with Email already exist!"});
        }
        else if(cpassword!==password){
            return res.status(400).json({msg:"Password not match!"});
        }
        else if(password.length<8 || password.length>10 ){
            return res.status(400).json({msg:"Password length must me 8 or 10"});
        }
        await newUser.save();//await User.create(newUser);
        res.status(200).json({msg:"User inserted"});
    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}

export const display=async(req,res)=>{
    console.log(req.url);
    try{
        const users=await User.find({});
        if(!users){
            return res.status(400).json({msg:"No users found!"});
        }
        res.status(200).json(users);

    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}

export const deleteUser=async(req,res)=>{
    console.log("request -> ",req.params.id);
    try{
        const id=req.params.id;
        const exist=await User.findOne({_id:id});
        if(!exist){
            return res.status(400).json({msg:"User not found!"});
        }
        await User.deleteOne({_id:id});
        res.status(200).json({msg:"user deleted"});
    }
    catch(err){
        res.status(500).json({msg:err.message});
    }
}

export const updateUser=async(req,res)=>{
    console.log("Id -> ",req.params.id);
    const id=req.params.id;
    try{
        const data=req.body;
        await User.findByIdAndUpdate(id,data);
        return res.status(200).json({msg:"User updated."});
    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}