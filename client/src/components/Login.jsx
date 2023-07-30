import React, { useState } from 'react';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulating login process

        // // alert(`Username: ${username}\nPassword: ${password}`);
        try {
            const apiUrl = "http://localhost:8000/api/v1/users/login";
            const data = {
                email: email,
                password: password
            }

            const response = await axios.post(apiUrl, data).then((resp) => {
                console.log(resp.data)
            })

            const { token } = response.data
            localStorage.setItem(token, "token")
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
