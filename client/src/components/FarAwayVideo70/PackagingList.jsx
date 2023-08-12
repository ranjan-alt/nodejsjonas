import React, { useState } from "react";
import Item from "./Item";


// const initalItems = [
//     { id: 1, description: "Passport", quantity: 2, packed: false },
//     { id: 2, description: "socks", quantity: 12, packed: true }
// ]


const PackagingList = ({ items, handleDeleteItem, handleToggleItem, handleClearList }) => {
    const [sortBy, setSortBy] = useState("input")
    let sortedItems;
    if (sortBy === "input") sortedItems = items
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))



    return (
        <>
            <ul>
                {sortedItems.map((item) => <Item
                    item={item}
                    key={item}
                    handleDeleteItem={handleDeleteItem}
                    handleToggleItem={handleToggleItem}

                />)}
            </ul>
            <div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort By input order</option>
                    <option value="description">Sort By description</option>
                    <option value="packed">Sort By packed status</option>
                </select>
                <button onClick={handleClearList}>Clear list</button>
            </div>
        </>
    )
}

export default PackagingList