import {useState, useEffect} from 'react';

import {postsService} from '../../services/posts.service';
import {Post} from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getAllPosts().then(value => setPosts(value))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
