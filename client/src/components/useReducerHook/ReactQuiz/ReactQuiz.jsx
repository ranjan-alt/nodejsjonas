import { useEffect, useReducer } from "react"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen"
import "./main.css"
import QuestionComponent from "./QuestionComponent"
import NextButton from "./components/NextButton"
import Progress from "./components/Progress"
import FinishScreen from "./components/FinishScreen"
import Timer from "./components/Timer"
import Footer from "./components/Footer"

const SECS_PER_QUESTION = 30

const initialState = {
    questions: [],
    //"loding" "error" "ready" "active" "finished" // this has nothing to do with reducer but the best practice to handle status
    status: "Loading",
    index: 0,
    answer: null, // this means there will be no answer initally
    points: 0,
    secondsRemaining: null,
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
                status: "active",
                secondsRemaining: state.questions.length * SECS_PER_QUESTION
            }
        case "newAnswer":
            const question = state.questions[state.index]
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points

            }
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null
            }

        case "Finished":
            return {
                ...state,
                status: "Finished"
            }
        case "ResetQuiz":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready"
            };
        case "Tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "Finished" : state.status
            }
        // return{...state, points:0,index:0,answer:null,status:"ready"}  we can do this also
        default:
            throw new Error("Action unknown")
    }
}

function ReactQuiz() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { questions, status, index, answer, points, secondsRemaining } = state // destructure the data 

    const numQuestions = questions.length
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0)
    useEffect(() => {
        fetch("https://question-foi7.onrender.com/questions")
            .then(res => res.json())
            .then(data => dispatch({ type: "dataRecieved", payload: data }))  // here we created data recived event to which our reducer will respond we will also send payload or information to the reducer so that it can compute the next state 
            .catch((err) => dispatch({ type: "dataFailed" }))
    }, [])

    return (
        <>
            <h1>The React Quiz</h1>
            <main>
                {status === "Loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
                {status === "active" && (
                    <>

                        <Progress numQuestion={numQuestions} index={index} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer} />
                        <QuestionComponent
                            question={questions[index]}
                            dispatch={dispatch}
                            answer={answer}

                        />
                        {/* note--> we also need answer to display answer is given correct or not */}
                        <Footer>

                            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
                            <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index} />
                        </Footer>
                    </>
                )}
                {status === "Finished" && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} />}

            </main>

        </>
    )
}


export default ReactQuiz