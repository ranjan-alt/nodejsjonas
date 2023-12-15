import { Table, TableBody, TableRow, TableHead, TableCell, Button } from "@mui/material"
import { getUsers, deleteUser } from "../service/api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const AllUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers()
        setUsers(response.data)
        console.log(response.data)
    }

    const deleteUserDetails = async () => {
        await deleteUser()
    }

    return (
        <>
            <Table style={{ width: "90%", margin: "50px auto 0 auto" }}>
                <TableHead>
                    <TableRow style={{ backgroundColor: "#000000" }}>
                        <TableCell style={{ color: "#fff", fontSize: "20px" }}>Id</TableCell>
                        <TableCell style={{ color: "#fff", fontSize: "20px" }}>Name</TableCell>
                        <TableCell style={{ color: "#fff", fontSize: "20px" }}>UserName</TableCell>
                        <TableCell style={{ color: "#fff", fontSize: "20px" }}>Email</TableCell>
                        <TableCell style={{ color: "#fff", fontSize: "20px" }}>Phone</TableCell>
                        <TableCell style={{ color: "#fff", fontSize: "20px" }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TableRow>
                                <TableCell style={{ fontSize: "10px" }}>{user._id}</TableCell>
                                <TableCell style={{ fontSize: "10px" }}>{user.name}</TableCell>
                                <TableCell style={{ fontSize: "10px" }}>{user.username}</TableCell>
                                <TableCell style={{ fontSize: "10px" }}>{user.email}</TableCell>
                                <TableCell style={{ fontSize: "10px" }}>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edituser/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>

    )
}

export default AllUser