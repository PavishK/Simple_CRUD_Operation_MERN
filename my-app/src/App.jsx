import React, { useState } from 'react'
import Signup from './Pages/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layer from './Layer';
import Manage from './Pages/manage';
import Update from './Pages/Update';

 
function App() {;
  return (
   <>
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layer/>}>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/manage-user' element={<Manage/>}/>
        <Route path='/update-user' element={<Update/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
   </>
  )
}

export default App