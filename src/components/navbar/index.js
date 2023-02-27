import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  return (
    <nav className="navbar navbar-dark bg-black navbar-expand-lg">

        <Link to='/' className="navbar-brand"> Workout Tracker </Link>

        <div className="collpase navbar-collapse">

        <ul className="navbar-nav mr-auto">
            <li  className="navbar-item">
                <Link to='/workout' className="nav-link"> Exercises</Link>
            </li>
            <li  className="navbar-item">
                <Link   to='/create' className="nav-link"> Log Exercise</Link>
            </li>
            <li  className="navbar-item">
                <Link   to='/create_user' className="nav-link"> Sign Up</Link>
            </li>
            <li  className="navbar-item">
                <Link   to='/playlist' className="nav-link"> Playlist</Link>
            </li>
           
        </ul>


        </div>

    </nav>

   
  )
}

export default Navbar