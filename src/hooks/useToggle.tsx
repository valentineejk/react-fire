import React, { useState } from 'react'



export const useToggle = (initial = false) => {
const [state, setstate] = useState(initial);

    const toggle = () => {
        setstate((prev) => !prev);
    }

    return [state, toggle]
}
