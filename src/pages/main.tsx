import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../config/firebase'

interface Props {
    
}

export const Main = (props: Props) => {
        const [user] = useAuthState(auth);

    return (
<div>


{/* card */}
        <div className="flex justify-center m-5">

            <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
 { user &&( <>
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user?.photoURL || ""}/>
    </div>

    
    </>
)}
    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{user?.displayName}</h2>

    <p className="mt-2 text-gray-600 dark:text-gray-200">{user?.email}</p>

    <div className="flex justify-end mt-4">
        <p className="text-xl font-medium text-blue-600 dark:text-blue-300" tabIndex={0} role="link">{user?.isAnonymous}</p>
    </div>
</div>

        </div>


{/* add */}
{user && (<div className='py-6'>
  <button className=" px-6 py-2.5 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                      <h1 className='text-xl font-extrabold'>
 +
                        </h1> 
                    </button>
                    </div>
)}

{/* post */}

{/* <div className='flex justify-center m-5'>
                    <div className=" max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
        <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex={0} role="button">Design</p>
    </div>

    <div className="mt-2">
        <p className="text-2xl text-left font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex={0} role="link">Accessibility tools for designers and developers</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-left ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
    </div>

    <div className="flex items-center justify-between mt-4">
        <p className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex={0} role="link">Read more</p>

        <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar"/>
            <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex={0} role="link">Khatab wedaa</p>
        </div>
    </div>
</div>
</div> */}


        </div>
    )
}

export default Main
