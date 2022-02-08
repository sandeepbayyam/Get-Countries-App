import {UPDATE_COUNTRIES} from './action.types.js'
export function getCountries(){
  return (dispatch)=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({ type: UPDATE_COUNTRIES, val: data });
    });
  };
  };
