import React from "react";
import "./style.css";
import store from './store/store';
import {Provider} from 'react-redux'
import Countries from './Countries';

export default function App() {
  return (
    <Provider store={store}>
    <div className='betterview'>
      <h1>Redux Thunk Middleware</h1>
      <Countries></Countries>
      </div>
    </Provider>
  );
}
