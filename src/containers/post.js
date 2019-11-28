import React, { Component } from 'react';
import PostContent from '../components/post-content';

class Post extends Component {
    render() {
        return (
            <div>
                ID : {this.props.params.id}
                <PostContent />
            </div>
        );
    }
}

export default Post;