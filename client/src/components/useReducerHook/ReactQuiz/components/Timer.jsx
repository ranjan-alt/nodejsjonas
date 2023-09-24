import { useEffect } from "react"

function Timer({ dispatch, secondsRemaining }) {
    const mins = Math.floor(secondsRemaining / 60)
    const sec = secondsRemaining % 60
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch({ type: "Tick" });
        }, 1000);
        return () => {                  /// best example of cleanup function 
            clearInterval(intervalId);
        };
    }, [dispatch])
    return (
        <>
            <div className="timer">{mins < 10 && "0"}{mins}:{sec < 10 && "0"}{sec}</div>
        </>
    )
}

export default Timer