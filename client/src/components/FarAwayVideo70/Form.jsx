import React, { useState } from "react";


const Form = ({ handleAdditems }) => {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(5)




    function handleSubmit(e) {
        e.preventDefault()
        if (!description) {
            return
        }
        const newItem = { description, quantity, packed: false, id: Date.now() }
        console.log(newItem)

        handleAdditems(newItem)

        setDescription("")
        setQuantity(1)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>{num}</option>)}
                </select>
                <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)} />
                <button >Add</button>
            </form>
        </>
    )
}

export default Form