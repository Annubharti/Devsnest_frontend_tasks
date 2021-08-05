import {createStore} from'redux'
import {userFormReducer} from './userForm/UserFormReducer'
const store=createStore(userFormReducer)
export default store