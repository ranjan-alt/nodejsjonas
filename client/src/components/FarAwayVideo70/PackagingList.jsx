import React from "react";
import Item from "./Item";


const initalItems = [
    { id: 1, description: "Passport", quantity: 2, packed: false },
    { id: 2, description: "socks", quantity: 12, packed: true }
]


const PackagingList = ({ items }) => {
    return (
        <>
            <ul>
                {items.map((item) => <Item item={item} key={item} />)}
            </ul>
        </>
    )
}

export default PackagingList