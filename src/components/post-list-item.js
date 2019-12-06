import React from 'react';
import {Link} from 'react-router';

const PostListItem = (props) => {
    const {post} = props;
    return (
        <tr>
            <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
            <td><button className="btn btn-danger" onClick={() => deletPost(post) }>Supprimer</button></td>
        </tr>
    );

    function deletPost(post){
        props.deletePostCallBack(post);
    }
};

export default PostListItem;