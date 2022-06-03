export function reducerUsers(state = [], action) {
    switch (action.type) {
        case "LOAD_USERS":
            return [...action.payload] // те що ми тут повертаємо
            //попадає в defaultRootState (тобто масив з юзерами і тоді його мапаємо)
        default:
            return state;
    }

}