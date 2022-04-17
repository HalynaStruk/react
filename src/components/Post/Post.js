export const Post = ({post}) => {
    const {title, body} = post;
    return (
        <div>
            {title}: {body}
        </div>
    )
}