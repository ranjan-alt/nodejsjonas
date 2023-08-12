const Stats = ({ items }) => {

    if (!items.length) {
        return (
            <>
                <p>Start adding items to the list</p>
            </>
        )
    }
    const numItems = items.length
    const numPacked = items.filter((item) => item.packed).length
    const percentage = Math.round((numPacked / numItems) * 100)
    return (

        <>
            <h3>You have {numItems} in your list {numPacked}({percentage}%)</h3>
        </>
    )
}


export default Stats