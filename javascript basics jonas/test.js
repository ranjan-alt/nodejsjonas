const data = [
    {
        id: 1, name: ["ranjan", "monga", "radhika"]
    },
    {
        id: 2, name: "kumar"
    }, {
        id: 3, name: "sah"
    }
]



const getName = (id) => {
    return data.find((d) => d.id === id)
}

const checkname = getName(1)

const { id, name } = checkname
console.log(checkname)

//rest operartor
const [...test] = name
console.log(name)

//spread opertator 
const nesTest = [...name, "hello"]
console.log(nesTest)
