import {useState, useEffect} from 'react';

import {commentsService} from '../../services/coments.service';
import {Comment} from '../Coment/Comment';

export const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAllComments().then(value => setComments(value))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
