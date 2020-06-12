import React from 'react';
import logo from './logo.svg';
import './App.css';
import Simplereactredux from './component/simplereactredux'
//1- Need to import Provider packages from react-redux to inject the global store for our application.
import { Provider } from 'react-redux'
//2- Create the store now that can be used by the react using redux
import { createStore } from 'redux'
//3- Finally import our reducer 
import myreducer from './store/reducer'

const store = createStore(myreducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Simplereactredux></Simplereactredux>
      </Provider>
    </div>
  );
}

export default App;
