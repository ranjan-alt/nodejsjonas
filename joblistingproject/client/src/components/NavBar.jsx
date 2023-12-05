import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
// import { Tabs } from '@mui/material';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <AppBar style={{ position: "static" }}>
                <ToolBar>
                    <div style={{ display: "flex" }}>
                        <NavLink to='/' style={{ marginRight: "20px", color: "#ffff" }}>code for interview</NavLink>
                        <NavLink to="/alluser" style={{ marginRight: "20px", color: "#ffff" }}>All users</NavLink>
                        <NavLink to="adduser" style={{ marginRight: "20px", color: "#ffff" }}>Add user</NavLink>
                    </div>

                </ToolBar>
            </AppBar>
        </>
    )
}

export default Navbar