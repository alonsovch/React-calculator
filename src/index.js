import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import Bgcolor from './Bgcolor'
import eolian from './eolian.png'

ReactDOM.render(
    <div>
        <img src={eolian} className="App-logo" alt="logo" class = "center"/>
        <Bgcolor/>
        <Calculator/>        
    </div>,
     document.getElementById('root'));
