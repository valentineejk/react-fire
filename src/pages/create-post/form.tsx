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
        <div className=' flex items-center justify-center mt-24' >

    <form onSubmit={handleSubmit(createPost)}>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Enter title</span>
    {/* <span className="label-text-alt">Alt label</span> */}
  </label>
  <input 
  type="text" 
    {...register("title") }
  placeholder="Type here" 
  className="input input-bordered w-full max-w-xs" 
  />
{errors?.title && (  <label className="label">
    <span className="label-text-alt">{ errors?.title?.message}</span>
  </label>)}
</div>

        
<div className="form-control  max-w-xs">
  <label className="label">
    <span className="label-text">Your bio</span>
  </label> 
  <textarea className="textarea textarea-bordered h-24"  {...register("desc")} placeholder="Bio"></textarea>
 {errors?.desc &&( <label className="label">
    <span className="label-text-alt">{    errors?.desc?.message}</span>
  </label> )}
</div>
<button type='submit' className="btn btn-wide px-6 mt-6">Submit</button>
    </form>
    
        </div>
    )
}
