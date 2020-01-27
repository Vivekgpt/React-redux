const ADD_INFO = 'ADD_INFO';

const initistate = {
    stored_data: [],
}

const stored_data = (state = initistate, action) => {
    switch (action.type) {
        case ADD_INFO:
            // console.log(state, action)
            return {
                ...state,
                stored_data: [...state.stored_data, action.all]
            }
    
        default:
            return state
    }
}

export default stored_data;