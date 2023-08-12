import React, { useState } from "react";
import PackagingList from "./PackagingList";
import Form from "./Form";
import Stats from "./Stats";

const FarAway = () => {
    const [items, setItems] = useState([])
    const numItems = items.length
    function handleAdditems(item) {      //newitem which we passed in form handleAdditems 
        // setItems(items)  dont do this donot mutate the state as react is all about immutibality
        setItems((items) => [...items, item])
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id))
    }

    function handleToggleItem(id) {
        setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
    }

    function handleClearList() {
        const confirmed = window.confirm("Are you sure to delete all items")
        if (confirmed) {
            setItems([])
        }

    }
    return (
        <>
            <Form handleAdditems={handleAdditems} />
            <PackagingList
                items={items}
                handleDeleteItem={handleDeleteItem}
                handleToggleItem={handleToggleItem}
                handleClearList={handleClearList}
            />
            <Stats items={items} />

        </>
    )
}

export default FarAway