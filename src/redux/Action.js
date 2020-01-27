const ADD_INFO = 'ADD_INFO'

const addDespInfo = (action_data) => {
    // console.log(action_data);
    return {
        type: ADD_INFO,
        all: action_data
    }
}

export { addDespInfo }