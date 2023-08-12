
import React from "react";

const Item = ({ item }) => {
    return (
        <>
            <li>
                <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.description}</span>
                <button>X</button>
            </li>
        </>
    )
}

export default Item