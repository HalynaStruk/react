export function reducerPosts(state = [], action) {
    switch (action.type) {
        case "LOAD_POSTS":
            return [...action.payload] // те що ми тут повертаємо
        //попадає в defaultRootState (тобто масив з юзерами і тоді його мапаємо)
        default:
            return state;
    }

}