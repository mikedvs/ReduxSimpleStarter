import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component should produce som
// HTML

const App = () => {
    return <div>Hi!</div>
}

// Take this component's generated HTML and put it on 
// the page

const container = document.querySelector('.container');

ReactDOM.render(<App />, container);