import {checkingCredentials} from '../auth/authSlice'
import {Dispatch} from 'redux'
export const checkingAuthetication = (email:string, password:string)=> {
    return async (dispatch:Dispatch) => {
        dispatch(checkingCredentials());
    }

}