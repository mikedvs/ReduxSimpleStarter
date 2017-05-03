import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Youtube Search API
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAvwCKvOSYt1Jx2iXlYc_tRmW5Ikj0UYYQ';

// Create new component. This component should produce som
// HTML

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({
			key: API_KEY,
			term: 'surfboards'
		}, (videos) => {
			this.setState({ videos });
			console.log(videos);
			// equivalent to this.setState({videos:videos}); !Syntactic sugar
		});
	}
    render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	} 
}

// Take this component's generated HTML and put it on 
// the page

const container = document.querySelector('.container');

ReactDOM.render(<App />, container);

