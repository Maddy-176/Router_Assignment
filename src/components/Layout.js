import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <>
    <div>Layout</div>
    <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
    </>

  )
}

export default Layout