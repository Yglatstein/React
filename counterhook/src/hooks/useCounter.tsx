import { useEffect, useState } from "react";

function useCounter(initialState = 0){
    const [state, setCounter] = useState(initialState)

    const increment = () => {
        console.log("ckicked")
        setCounter(state => state + 1)
    }

    const get = () => state;

    return [state, increment]
}

export default useCounter
