import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';


class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <p>Youtube Component</p>
                    <hr />

                    <YoutubeComp
                        time="7.13"
                        title="Tutorial Web 1 - Delta"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <YoutubeComp
                        time="5.13"
                        title="Tutorial Web 2 - Delta"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <YoutubeComp
                        time="3.13"
                        title="Tutorial Web 3 - Delta"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <YoutubeComp
                        time="1.13"
                        title="Tutorial Web 3 - Delta"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <YoutubeComp />
                </div>
            </Fragment>
        )
    }
}

export default YoutubeCompPage;