import { SIGNED_IN } from '../constants'

const initialState = {
    email: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SIGNED_IN: {
            return {
                email: action.email
            }
        }
        default:
            return state
    }   
}