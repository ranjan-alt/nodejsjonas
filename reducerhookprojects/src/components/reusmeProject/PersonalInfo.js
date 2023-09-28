import { useState } from "react"
import { useResume } from "./resumecontext"

function PersonalInfo() {
    const { state, dispatch } = useResume();
    const [formData, setFormData] = useState(state.personalInfo)
    const [education, setEducation] = useState(state.education)


    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(formData)
        setFormData({ ...formData, [name]: value })
    }

    const savePersonalInfo = () => {
        dispatch({ type: "updatePersonalInfo", payload: formData })
    }

    const handleEducation = (e) => {
        setEducation(e.target.value)
        dispatch({ type: "addeducation", payload: education })
    }
    return (
        <>
            <div>
                <h2>Personal Information</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <button onClick={savePersonalInfo}>Save</button>
            </div>

            <div>
                <input type="text" value={education} onChange={handleEducation} />
            </div>

        </>
    )
}



export default PersonalInfo