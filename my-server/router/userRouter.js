import express from 'express';
import {insert,display,deleteUser, updateUser} from '../controller/userController.js';

const Router=express.Router();

Router.post("/insert",insert);
Router.get("/display",display);
Router.delete("/delete/:id",deleteUser);
Router.put("/update/:id",updateUser);
export default Router;