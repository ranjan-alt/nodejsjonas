import { useEffect, useReducer } from "react"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen"
import "./main.css"
import QuestionComponent from "./QuestionComponent"

const initialState = {
    questions: [],
    //"loding" "error" "ready" "active" "finished" // this has nothing to do with reducer but the best practice to handle status
    status: "Loading",
    index: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case "dataRecieved":             //this is the cation we are going to dispatch as soon as we have data
            return {
                ...state,
                questions: action.payload,
                status: "ready"   // in this place we can also set the status , so bascially we updated these two state variables all in one in this one dispatch 
            }
        case "dataFailed":      //i ui when we have error we will use this
            return {
                ...state,
                status: "error",
            }
        case "start":
            return {
                ...state,
                status: "active"
            }
        default:
            throw new Error("Action unknown")
    }
}

function ReactQuiz() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { questions, status } = state // destructure the data 

    const numQuestions = questions.length
    useEffect(() => {
        fetch("http://localhost:8000/questions")
            .then(res => res.json())
            .then(data => dispatch({ type: "dataRecieved", payload: data }))  // here we created data recived event to which our reducer will respond we will also send payload or information to the reducer so that it can compute the next state 
            .catch((err) => dispatch({ type: "dataFailed" }))
    }, [])

    return (
        <>
            <main>
                {status === "Loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
                {status === "active" && <QuestionComponent />}
            </main>

        </>
    )
}


export default ReactQuiz