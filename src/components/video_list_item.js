import React from 'react';

const VideoListItem = ({video}) => {
	// ES6 SYNTAX for props.video
	const snippet = video.snippet,
		  imageUrl = snippet.thumbnails.default.url,
		  vidTitle = snippet.title;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				{/*media body*/}
				<div className="media-body">
					<div className="media-heading">{vidTitle}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;