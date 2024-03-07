import { data } from '../../../data';

const reducer = (state, action) => {
    if(action.type === 'REMOVE') {
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.payload.id)  
            }
    } else if (action.type === 'RESET') {
      return {
        ...state,
        people: data  
      }
    } else if(action.type === 'CLEAR_ALL') {
      return {
        ...state,
        people: []  
      };
    } 
    return state
  }

  export default reducer;