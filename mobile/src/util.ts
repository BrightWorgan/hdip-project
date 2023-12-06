import axios from "axios"
import Toast from 'react-native-toast-message';import { API_URL } from '@env';
import { jwtDecode } from "jwt-decode";
let token: string | undefined;

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