import React, { Component } from 'react';
import {Router, Route, Link, browserHistory, IndexRouter} from 'react-router';
import PostList from './containers/post-list';
import PostForm from './containers/post-form';
import Post from './containers/post';

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={PostList} />
                <Route path="create-post" component={PostForm} />
                <Route path="post/:id" component={Post} />
            </Router>
        );
    }
}

export default Routes;
