import React, {useReducer} from 'react'

const intiCount = 0;
const mangeCount = (state, action) => {
    switch (action){
        case 'inc':
           return state + 1
        case 'dec':
            return state - 1;
        case 'reset':
            return intiCount
        default:
            return state
    }

}

const Reducer = () => {

    let [count, countAction] = useReducer(mangeCount, intiCount)

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => countAction('inc')}>Increment</button>
            <button onClick={() => countAction('dec')}>Decrement</button>
            <button onClick={() => countAction('reset')}>Reset</button>
            
        </div>
    )
}

export default Reducer
