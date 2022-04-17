export const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            {id}. <b>{name} {username}</b> {(email)}

        </div>
    )
}