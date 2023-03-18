import { useEffect, useState } from "react";

export function useCounter(initialState = 0){
    const [state, setState] = useState(initialState)

    const increment = () => {
        setState(state => state + 1)
    }

    return [state, increment]
}