import React from 'react';
import {connect} from 'react-redux';
import {getCountries} from './store/countries.actions.js'

function Countries (props){
   console.log(props);
  return(
    <div className='betterview'>
      <h3> Get Countries from (API)</h3>
      <button onClick={()=>{props.getCountries()}
      }>Get Countries</button>
      <hr/>
       <div className="container">
           <div className="row">
          <div className="card-deck">
         {
                   props.countries.map((c,i)=>{
                        return(
                                <div className="col-3" key={i}>
                                    <div className="card">
                                        <div className="card-body text-center">
                                        <img className="card-img-top" src={c.flags.png} alt="Card"/>
                                        <div className="card-body">
                                        <h4 className="card-title">{c.name.common}</h4>
                                        <h6 className="card-title">Capital:{c.capital}</h6>
                                            <p className="card-text">Region:{c.region}</p>
                                            <button>See Profile</button>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                        )
                    })
                }
               </div>
            </div>
        </div>
    </div>
  );
}
function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch){
  return{
    getCountries:()=>{
      dispatch(getCountries())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Countries);