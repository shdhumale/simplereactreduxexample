

const initialState = {
    counter: 1
}

const reducer = (state = initialState, action) => {

    const newState = { ...state }
    if (action.type === "action_type_increment") {
        newState.counter = newState.counter + 1
    }
    if (action.type === "action_type_decrement") {
        newState.counter = newState.counter - 1
    }
    return newState
}


export default reducer

