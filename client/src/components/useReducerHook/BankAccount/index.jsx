import React, { useReducer } from "react"



const initialState = {
    balance: 0,
    loan: 0,
    isActive: false
}
function reducer(state, action) {
    // if (action.type === "openaccount") {
    //     return { ...state, balance: action.payload }
    // }

    if (!state.isActive && action.type !== "openaccount") return state
    switch (action.type) {
        case "openaccount":
            return {
                ...state,
                balance: action.payload,
                isActive: true,

            }
        case "deposit":
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case "withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            }
        case "takeLoan":
            if (state.loan > 0) return state
            return {
                ...state,
                loan: action.payload,
                balance: state.balance + action.payload
            }

        case "payLoan":
            return {
                ...state,
                loan: 0,
                balance: state.balance - state.loan

            }

        case "closeAccount":
            if (state.loan > 0 || state.balance !== 0) return state
            return {
                ...state,
                balance: 0,
                loan: 0,
                isActive: false
            }
        default:
            throw new Error("unknonw action")
    }
}



function BankAccount() {
    // const initialState = {
    //     balance: 0,
    //     loan: 0,
    //     isActive: false
    // }
    const [state, dispatch] = useReducer(reducer, initialState)

    function openAccount() {
        dispatch({ type: "openaccount", payload: 500 })
    }

    function deposit() {
        dispatch({ type: "deposit", payload: 150 })
    }

    function withdraw() {
        dispatch({ type: "withdraw", payload: 50 })
    }


    function takeLoan() {
        dispatch({ type: "takeLoan", payload: 5000 })
    }

    function payLoan() {
        dispatch({ type: "payLoan", payload: -5000 })
    }

    function closeAccount() {
        dispatch({ type: "closeAccount" })
    }
    const { balance, loan, isActive } = state;
    return (
        <>
            <h1>Use Reducer Bank Account</h1>
            <p>Balance:{balance} </p>
            <p>Loan:{loan} </p>
            <div style={{ display: "flex", margin: "0 auto", flexDirection: "column", width: "10%" }}>
                <button style={{ padding: "10px" }} onClick={openAccount} disabled={isActive}>Open Account</button>
                <button style={{ padding: "10px" }} onClick={deposit} disabled={!isActive}>Deposit 150</button>
                <button style={{ padding: "10px" }} onClick={withdraw} disabled={!isActive}>Withdraw 50</button>
                <button style={{ padding: "10px" }} onClick={takeLoan} disabled={!isActive}>Request a loan of 5000</button>
                <button style={{ padding: "10px" }} onClick={payLoan} disabled={!isActive}>Pay Loan</button>
                <button style={{ padding: "10px" }} onClick={closeAccount}>Close Account</button>
            </div>

        </>
    )
}


export default BankAccount