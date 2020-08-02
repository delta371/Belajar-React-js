// Library
import React, { Component, Fragment, createContext } from 'react';
// Styling
import './Home.css';
// Pages
import YoutubeCompPage from '../../container/pages/YoutubeCompPage/YoutubeCompPage';
import Produk from '../pages/Produk/Produk';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';




class Home extends Component {
    // state = {
    //     showComponent: true
    // }



    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/produk">Produk</Link>
                        <Link to="/lifecycle">Life Cycle</Link>
                        <Link to="/youtubecomppage">Youtube Comp</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/produk" exact component={Produk} />
                    <Route path="/lifecycle" exact component={LifeCycleComp} />
                    <Route path="/youtubecomppage" exact component={YoutubeCompPage} />
                    <Route path="/detail-post/:id" exact component={DetailPost} />
                    <Route path="/hooks" exact component={Hooks} />
                </Fragment>
            </Router>

        )
    }
}

export default GlobalProvider(Home);