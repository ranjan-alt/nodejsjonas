import { combineReducers, createStore } from "redux"

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

const intialStateCustomer = {
    fullName: "",
    nationalId: "",
    createdAt: ""
}

// const ACCOUNT_DEPOSIT = "account/deposit";  no longer used in modern redux

function accountReducer(state = initialState, action) {
    switch (action.type) {
        //state name and the event name - naming convention
        case "account/deposit":
            return {
                ...state, balance: state.balance + action.payload
            }
        case "account/withdraw":
            return {
                ...state, balance: state.balance - action.payload
            }
        case "account/requestLoan":
            if (state.loan > 0) return state
            return {
                ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount
            }

        case "account/payLoan":
            return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan }

        default:
            return state
    }


}


function customerReducer(state = intialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payLoan.nationalId,
                createdAt: action.payLoan.createdAt
            }
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payLoan
            }
        default: return state
    }


}


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer)



// see in console
// store.dispatch({ type: "account/deposit", payload: 500 })
// console.log(store.getState())
// store.dispatch({ type: "account/withdraw", payload: 200 })
// console.log(store.getState())

// we wont write amount like this always  we will create action for the same 


// function deposit(){
//     return{type: "account/deposit", payload:500}  this 500 is the input so we will write amount and pass it to the function 
// }  



// action.js

function deposit(amount) {
    return { type: "account/deposit", payload: amount }
}

function withdraw(amount) {
    return { type: "account/withdraw", payload: amount }
}


function requestLoan(amount, purpose) {
    return ({ type: "account/requestLoan", payload: { amount, purpose } })
}


function payLoan() {
    return ({ type: "account/payLoan", })
}


// try this out 
store.dispatch(deposit(500))
console.log(store.getState())
store.dispatch((withdraw(200)))
console.log(store.getState())
store.dispatch(requestLoan(5000, "buy car"))
console.log(store.getState())
store.dispatch(payLoan(5000))
console.log(store.getState())

// customer action creator 
function createCustomer(fullName, nationalId) {
    return { type: "customer/createCustomer", payload: { fullName, nationalId, createdAt: new Date().toISOString() } }
}

function updateName(fullName) {
    return { type: "account/updateName", payLoan: fullName }
}