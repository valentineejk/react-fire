import React from 'react'
import { useForm } from 'react-hook-form'
import * as  yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string,
    desc: string,
}

export const Form = () => {

const [user, ] = useAuthState(auth);
const navigate = useNavigate();
const schema = yup.object().shape({
    title: yup.string().required("add a title"),
    desc: yup.string().required("add decription")
})

const postsRef = collection(db, "posts")

const {register, handleSubmit, formState: {errors}}= useForm<Props>({
    resolver: yupResolver(schema),
})


const createPost = async (data: Props) =>{
await addDoc(postsRef, {
    ...data,
    username: user?.displayName,
    userId: user?.uid,
})
navigate("/");
}
    return (
        <div  >

    <form onSubmit={handleSubmit(createPost)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
                <input
                 id="title" 
                 {...register("title") }
                 placeholder='Title'
                type="text" 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />


{/* errors */}
{errors?.title && (<div className="w-full text-white bg-yellow-400 mt-6">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                </path>
            </svg>

            <p className="mx-3">{    errors?.title?.message}</p>
        </div>

        <button className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>)}


            </div>

            <div>
                <textarea 
                id="emailAddress"
                placeholder='Description'
                {...register("desc")}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>

{/* errors */}
{errors?.desc &&(<div className="w-full text-white bg-yellow-400 mt-6">
    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                 <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                </path>
            </svg>

            <p className="mx-3">{    errors?.desc?.message}</p>
        </div>

        <button className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>)}
            </div>


         
        </div>

        <div className="flex justify-end mt-6">
            <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
                </button>
        </div>
    </form>


        </div>
    )
}
