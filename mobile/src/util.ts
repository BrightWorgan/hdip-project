import axios from "axios"
import Toast from 'react-native-toast-message';import { API_URL } from '@env';
import { jwtDecode } from "jwt-decode";
let token: string | undefined = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImZvcmVuYW1lIjoiU2FyYWgiLCJzdXJuYW1lIjoiSGFsZm9yZCIsIm51bWJlciI6IjA4MzM4MzM0MzYiLCJlbWFpbCI6InNhcmFoQGNsZWFuY29kZWNvbXBhbnkuY29tIiwiYWRkcmVzcyI6IkhvbWUiLCJ0b3duIjoiQmF3biByZCwgUnVzaCIsImNvdW50eSI6IkR1YmxpbiIsImVpcmNvZGUiOiJLNTZZUDAyIiwiZWR1Y2F0aW9uIjoiTGV2ZWwgOCIsImV4cGVyaWVuY2UiOiJTaXRlIEFzc2lzYXRhbnQiLCJ0cmFpbmluZyI6IlNhZmUgUGFzcyIsImRyaXZpbmciOiJObyIsInBvc2l0aW9uIjoiR2VuZXJhbCBPcGVyYXRpdmUiLCJzaXRlIjoiTm9uZSIsInBhc3N3b3JkIjoiYjE4Nzc4ZDQzZmQ3NTIzZDdhMjQzYmI3Nzg5Mjg0OGUyMDY5ZTZjMDc1NDEyNWU1MjVjZWViMTNiODU4MGJjZCIsImlhdCI6MTcwMjMyNzQ1OH0.3PkE_i2tQNqyJFlPvRK0XPfthcGAtJnO2yoRFWUPghk';

const TOKEN_KEY = 'SS_TOKEN_KEY';

const login = async (email: string, password: string): Promise<string|boolean|undefined> => {
   try{
    const result = await axios.post(API_URL + '/login', { email, password });
    console.log('Token is:', result.data);
    token = result.data;
    Toast.show({
        type: 'success',
        text1: "Logged In"
    })
    return token;
    
   }
   catch(error:any){
    Toast.show({
        type: 'error',
        text1: "Login error"
    })
   }
    
}

// const tryCache = async () => {
//     try {
//         const storageToken = await AsyncStorage.getItem(TOKEN_KEY);
//         if (!storageToken) {
//             return false;
//         }
//         const decoded = jwtDecode(storageToken);
//         if (!decoded || !decoded.exp) {
//             return false;
//         }
//         if (Date.now() >= decoded?.exp * 1000) {
//             return false;
//         }
//         token = storageToken
//         return true;
//     } catch (err) {
//         return false;
//     }
// };

const get = async (endpoint: string) => {
    console.log('Token is:', token);
    try {
        const result = await axios.get(API_URL + endpoint, {
            headers: {
                Authorization: token
            }
        });
        return result;
    } catch (error:any) {
        // toast.error(error.message);
    }
    
};

const post = async (endpoint: string, payload: any) => {
    try{
        await axios.post(API_URL + endpoint, payload, {
        
            headers: {
                Authorization: token
            }
        });
    }
    catch(error:any){
        // toast.error(error.message);
    }
    
}

const remove = async (endpoint: string, payload: any) => {
    try{
        await axios.delete(API_URL + endpoint, {
            data: payload,
            headers: {
                Authorization: token
            }
        });
    }
    catch(error:any){
        // toast.error(error.message);
    }
}

// decode user details from user JWT token
const getUser = () => {
    if( token === undefined){
        return null;
    }
     const user = jwtDecode(token);
    //  console.log(user);
    return user;
}


export default {
    login,
    get,
    post,
    remove,
    getUser
}