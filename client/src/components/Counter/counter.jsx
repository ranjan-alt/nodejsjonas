import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)




    const date = new Date("12 august 2023")
    date.setDate(date.getDate() + count)
    return (
        <>
            <div>
                <p>Step:{step}</p>
                <button onClick={() => setStep((s) => s + 1)}>+</button>
                <button onClick={() => setStep((s) => s - 1)}>-</button>
                <p> Count : {count}</p>
                <button onClick={() => setCount((s) => s - step)}>+</button>
                <button onClick={() => setCount((s) => s + step)}>-</button>
            </div>
            <p>
                <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was`}</span>
                <span>{date.toDateString()}</span>

            </p>
        </>
    )
}

export default Counter