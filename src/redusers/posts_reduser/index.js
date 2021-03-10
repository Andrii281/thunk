
import {ADD_POST} from '../../constans'

export default (state = null, action) => {
    switch(action.type){
        case ADD_POST:
            console.log('payload',action.payload )
            state = action.payload
            return state;
            
        default:
            return state;
    }
}
