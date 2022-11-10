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

const [isVisible, toggle] = useToggle();

// const toggleBtn = () => {
//     return toggle?
// }

const signUserOut = async () => {
    await signOut(auth)
}
    return (

<div className="bg-white dark:bg-gray-900">
   <nav   className="border-b dark:border-gray-700  ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/"className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" >{user?.displayName}</Link>
                </div>

                <div className="flex lg:hidden">
                    <div  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                      {  isVisible ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                :
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </div>
                </div>
            </div>

            <div  className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div className="flex flex-row space-y-8 space-x-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
                    <Link className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/">Home</Link>
            {  user == null &&      
                  (  <Link to="/login">
                    <button className="flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>
                      </Link>)
                      
                      }
                 
                   {  user &&
             (   <>
                   <button onClick={signUserOut} className="flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Logout
                    </button>
                    <img className="flex-shrink-0 object-cover w-8 h-8 rounded-full sm:mx-4 ring-4 ring-gray-300" src={user?.photoURL  || ""} alt=""/>

                    </>
)
                    }
                </div>
            </div>
        </div>
    </nav>
    </div>
    )
}

export default Navbar
