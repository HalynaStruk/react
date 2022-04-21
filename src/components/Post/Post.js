export const Post = ({post}) => {
    const {title, body} = post;
    return (
        <div>
            <b>{title}:</b> {body}
        </div>
    )
}