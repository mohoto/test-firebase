
const INITIAL_STATE = {
    count: 10
}

export default function compteurReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
       case 'INCR' :
           return {
               ...state,
               count: state.count + 1
           }
        case 'DECR' :
            return {
                ...state,
                count: state.count -1
            }
        case 'RESET' :
            return {
                ...state,
                count: INITIAL_STATE.count
            }
        default :
            return state;
   }
}
