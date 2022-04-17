export const Comment = ({comment}) => {
    const {name, body} = comment;
    return (
        <div>
            {name}: {body}
        </div>
    )
}