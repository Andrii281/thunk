import {ADD_USER} from '../../constans'

export default (state = null, action) => {
  
    switch(action.type){
        case ADD_USER:
            state = action.payload;
            return state;
    
        default:
            return state;
    }
}
