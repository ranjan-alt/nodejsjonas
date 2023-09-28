export const initialState = {
    personalInfo: {
        name: "",
        email: "",
        phone: "",

    },
    education: [],
    experience: []
}

export function reducer(state, action) {
    switch (action.type) {
        case "updatePersonalInfo":
            return {
                ...state,
                personalInfo: action.payload
            }
        case "addeducation":
            return {
                ...state,
                education: action.payload
            }
        case "experience":
            return {
                ...state,
                experience: action.payload
            }
        default:
            throw new Error("action unknonw")
    }
}