import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAvwCKvOSYt1Jx2iXlYc_tRmW5Ikj0UYYQ';

// Create new component. This component should produce som
// HTML

const App = () => {
    return <div>
        <SearchBar />
    </div>
}

// Take this component's generated HTML and put it on 
// the page

const container = document.querySelector('.container');

ReactDOM.render(<App />, container);

