import { combineReducers } from "redux";
import productreducer from "./productreducer";
import studentreducer from "./StudenReducer/Studenreducer"
import authreducer from "./Auth Reducer/auth.reducer"

const mainreducer = combineReducers({

    productreducer,
    studentreducer,
    authreducer
}

)

export default mainreducer