import React, { useState } from "react";
import "./steps.css"
const messages = [
    "Learn react",
    "Learn Node",
    "Invest in new income"
]

const Steps = () => {
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)
    console.log(step)

    function handlePrevious() {
        if (step > 1)
            setStep(step - 1)
    }
    function handleNext() {
        if (step < 3) setStep(step + 1)
    }
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}> &times;</button>
            {isOpen &&
                <div>


                    <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                    <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                    <div className={`${step >= 3 ? "active" : ""}`}>3</div>

                    {/* very important step  */}
                    <p>Step:{step}:{messages[step - 1]}</p>

                    <Button bgColor="#7950f2"
                        textColor="#ffff"
                        onClick={handlePrevious}
                        text="Previous" />
                    <Button bgColor="#7950f2"
                        textColor="#ffff"
                        onClick={handleNext}
                        text="Next"
                    />

                    {/* <button style={{ backgroundColor: "#7950f2", color: "#ffff" }} onClick={() => handlePrevious}>Previous</button> */}
                    {/* <button style={{ backgroundColor: "#7950f2", color: "#ffff" }} onClick={() => handleNext} >Next</button> */}

                </div>
            }
        </>
    )
}

function Button({ bgColor, textColor, onClick, text }) {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick} >{text}</button>
    )
}

export default Steps