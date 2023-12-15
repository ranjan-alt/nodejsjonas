import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material"
import { useState, useEffect } from "react"
// hamre pass react me ek onchange function hota hai jaise hi input field me value change hogi wo triiger ho jaega 
// e ek event hota hai or e catch krega and event k andar value hota hai 
// age ek hi function charo me call krenge to pta kaise chalega ki username name email kon sa hai (see in console )
// ab alag alag fucntion bna sakte hai but issse hmare pass bhot sare function ho jaenge but to tackle this we have one Thing 
// ie NAME field 

// ab mai ek hi object pass kroonga backend me jo bhi user fill krega

import { editUser, getUser } from "../service/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditUser = () => {

    const defaultValue = {
        name: "",
        username: "",
        email: "",
        phone: ""
    }

    // yahan pe key:value dono varilable hai isliay hme key ko square bracket me dalna padega

    const [user, setUser] = useState(defaultValue)
    console.log(user, "...........")

    const navigate = useNavigate()
    const { id } = useParams()


    // useEffect(() => {
    //     const loadUserDetails = async () => {
    //         const response = await getUser(id);
    //         setUser(response.data);
    //     };
    //     loadUserDetails();
    // }, []);

    useEffect(() => {
        const loadUserDetails = async () => {
            try {
                const response = await getUser(id);
                const userData = response.data[0]; // Access the first user object in the array
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        loadUserDetails();
    }, [id]);

    const onValueChange = (e) => {                 //e ko jab console krenge tb hme bhot sare prototype milte hai jisme name and value hota hai 
        // console.log(e.target.name, e.target.value) // jaise maine yahan value nikala hai wasie hi mai name nikal sakta hoon 
        // setUser({ ...user, [e.target.name]: e.target.value }) //...user isliay likha ki wo key ko replace na kr de try this
        // console.log(user)

        const updatedUser = { ...user, [e.target.name]: e.target.value };
        console.log(updatedUser); // Log the updated user object
        setUser(updatedUser);
    }

    const editUserDetails = async () => {
        // //iske andar api call krnge but uske liay api function banna padega or wo hum service k andar rakhnge sare api ko
        await editUser(user, id)
        navigate("/alluser")
    }
    return (
        <>
            <FormGroup style={{ width: "50%", margin: "5% auto 0 auto", }}>
                <Typography variant="h4">Edit User</Typography>
                <FormControl style={{ marginTop: "20px" }}>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
                </FormControl>
                <FormControl style={{ marginTop: "20px" }}>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
                </FormControl>
                <FormControl style={{ marginTop: "20px" }}>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
                </FormControl>
                <FormControl style={{ marginTop: "20px" }}>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => editUserDetails()}>Edit</Button>
                </FormControl>
            </FormGroup>
        </>
    )
}

export default EditUser