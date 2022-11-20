import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth';
import { useToggle } from '../hooks/useToggle';

interface Props {
    
}


export const Navbar = (props: Props) => {
    const [user] = useAuthState(auth);


// const toggleBtn = () => {
//     return toggle?
// }

const signUserOut = async () => {
    await signOut(auth)
}
    return (

<div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <p className="btn btn-ghost normal-case text-purple text-2xl">Space</p>
  </div>
  <div className="flex-none">

{/* home */}
    <div className="dropdown dropdown-end px-4">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <Link to="/">Home</Link>
      </label>
    </div>
    
    {/* login */}
 {user == null && (   <div className="dropdown dropdown-end px-4">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <h1>
            <Link to="/login">
            Login
            </Link>
            
            </h1>
      </label>
    </div>)}


{/* image */}
 {user &&(   <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL  || ""} alt="profile" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>  
            <Link to="/create">
          <p className="justify-between">
          
                            Create

          </p>
                      </Link>

        </li>
        <li><p  onClick={signUserOut}>Logout</p></li>
      </ul>
    </div>)}



  </div>
</div>

    )
}

export default Navbar
