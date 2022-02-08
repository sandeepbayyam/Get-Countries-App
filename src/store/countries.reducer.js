import {UPDATE_COUNTRIES} from './action.types.js'
const initialstate = {
countries:[]
}
const Countriesreducer =(state=initialstate,action)=>{
  if(action.type===UPDATE_COUNTRIES){
    return{
      ...state,countries:[...action.val]
    }
  }
  return state
}
export default Countriesreducer;