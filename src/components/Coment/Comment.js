export const Comment = ({comment}) => {
    const {name, body} = comment;
    return (
        <div>
            <b>{name}:</b> {body}
        </div>
    )
}