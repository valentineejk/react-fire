import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from '../config/firebase'
import { signOut } from 'firebase/auth';

interface Props {
    
}


export const Navbar = (props: Props) => {
    const [user, loading, error] = useAuthState(auth);
const signUserOut = async () => {
    await signOut(auth)
}
    return (

<div className="bg-white dark:bg-gray-900">

{/* <nav className="bg-white shadow dark:bg-gray-800">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link to="/" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">home</Link>
        <Link to="/login" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">login</Link>
   <div className="flex justify-center -mt-16 md:justify-end">
    </div>
            <img src={user?.photoURL || ""}  width="100" height="100" className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" />

    </div>
</nav> */}





   <nav x-data="{ isOpen: false }"  className="border-b dark:border-gray-700">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/"className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" >{user?.displayName}</Link>
                </div>

                <div className="flex lg:hidden">
                    <button x-cloakClick="isOpen = !isOpen" type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div x-cloakClassName="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div className="flex flex-row space-y-8 space-x-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
                    <Link className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/">Home</Link>
                    <Link to="/login">
                    <button className="flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>

                      </Link>
                 
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
