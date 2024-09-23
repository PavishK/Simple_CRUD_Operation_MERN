import React from 'react'
import {Link,Outlet} from 'react-router-dom';

function Layer() {
  return (
    <>
    <div>
    <Link to='/signup'>Sign up</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Layer