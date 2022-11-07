import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from '../config/firebase'

interface Props {
    
}

export const Main = (props: Props) => {
        const [user, loading, error] = useAuthState(auth);

    return (
        <div className="flex justify-center">

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
    )
}

export default Main
