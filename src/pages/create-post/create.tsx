import React from 'react'
import { Form } from './form'

interface Props {
    
}

export const Create = (props: Props) => {
    return (
        <div className='p-6'>
                         <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

<Form/>
</section>
        </div>
     
    )
}
