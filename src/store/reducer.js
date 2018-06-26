
const initialState = {
    availableUser: [
        {
            username: 'asd',
            password: '123'
        },
        {
            username: '123',
            password: 'asd'
        },
        {
            username: 'asdasd',
            password: '123123'
        }
    ],
    loggedUser: null
};

export default (state = initialState, action) => {
    if (action.type === 'LOGIN_USER') {
        let match = state.availableUser.find(user => {
            return user.username === action.user.username && user.password === action.user.password
        });

        if(match) {
            return {
                ...state,
                loggedUser: action.user
            }
        } else {
            return {
                ...state
            }
        }
    }
    return state;
}