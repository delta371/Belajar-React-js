import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import './DetailPost.css';


class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }


    componentDidMount() {
        let id = this.props.match.params.id;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            let result = res.data;
            this.setState({
                post: {
                    title: result.title,
                    body: result.body
                }
            })
        })
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <p className="p-detail-post">Detail Post</p>
                <hr />
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </Fragment>
        )
    }
}

export default DetailPost;