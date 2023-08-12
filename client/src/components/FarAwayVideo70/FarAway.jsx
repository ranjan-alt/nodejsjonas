import React, { useState } from "react";
import PackagingList from "./PackagingList";
import Form from "./Form";


const FarAway = () => {
    const [items, setItems] = useState([])
    function handleAdditems(item) {
        // setItems(items)  dont do this donot mutate the state as react is all about immutibality
        setItems((items) => [...items, item])
    }
    return (
        <>
            <Form handleAdditems={handleAdditems} />
            <PackagingList items={items} />
        </>
    )
}

export default FarAway