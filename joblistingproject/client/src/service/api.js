import axios from "axios";

const URL = "http://localhost:3000";

export const addUser = async (data) => {
    try {
        await axios.post(`${URL}/add`, data)  //post me jo first argument hota hai wo hota hai api url +  endpoint hota hai and second me data jo hmne object bnaya hai


    } catch (error) {
        console.log("Error while calling the api", error)
    }
}