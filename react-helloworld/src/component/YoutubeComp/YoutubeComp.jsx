import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://jldwiana.files.wordpress.com/2018/12/back-end-developer.jpg" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'Lorem Ipsum is simply dummy text of the printing and wkwkwkwk'
}

export default YoutubeComp;