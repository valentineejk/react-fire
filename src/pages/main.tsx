import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import { auth, db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore';
import { Post } from '../components/posts';

export interface Post {
    id: string;
    userId: String;
    title: string;
    desc: string;
    username: string;

}

export const Main = () => {
    const postsRef = collection(db, "posts")
    const [posts, setPosts] = useState<Post[] | null>(null)
    const [user] = useAuthState(auth);
    const getPosts = async () => {
const data = await getDocs(postsRef);
setPosts(
    data.docs.map((doc)=> ({
        ...doc.data(),
        id: doc.id
    })) as Post[]
    );

    }

    useEffect(() => {
     getPosts();
    }, [])

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
    <Link to="/create">  
    <button className=" px-6 py-2.5 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                      <h1 className='text-xl font-extrabold'>
 +
                        </h1> 
                    </button>
    </Link>

                    </div>
)}

{/* post */}
{
    posts?.map((post)=>(
<Post post={post}  />
    ))
}



        </div>
    )
}

export default Main
