const initial = {
    user: '',
    email: '',
    password: '',
    isLogin: ''
}

const authreducer = (state = initial, action) => {
    switch (action.type) {

        case "SINGUP_SUC":
            return {
                ...state,

            }
            case "SINGUP_ERR":
                return {
                    ...state,
                   
                }

        default:
            return state
    }
}

export default authreducer;