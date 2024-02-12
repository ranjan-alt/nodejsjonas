import { forwardRef } from "react";
import { useRef } from "react"


const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return (
        <>
            <p>
                <label htmlFor="">{label}</label>
                {textarea ? <textarea ref={ref} {...props} /> : <input ref={ref}  {...props} />}
            </p>

        </>
    )
})


export default Input