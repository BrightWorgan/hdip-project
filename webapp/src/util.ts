import axios from "axios"
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
let token: string | undefined;

const login = async (email: string, password: string): Promise<string|boolean|undefined> => {
   try{
    const result = await axios.post(import.meta.env.VITE_API_URL + '/login', { email, password });
    console.log('Token is:', result.data);
    token = result.data;
    toast.success("Logged In")
    return token;
    
   }
   catch(error:any){
        toast.error("Invalid Login")
   }
    
}

const get = async (endpoint: string, payload?: any | undefined) => {
    console.log('Token is:', token);
    try {
        const result = await axios.get(import.meta.env.VITE_API_URL + endpoint, {
            data: payload,
            headers: {
                Authorization: token
            }
        });
        return result;
    } catch (error:any) {
        toast.error(error.message);
    }
    
};

const put = async (endpoint: string, payload?: any | undefined) => {
    try {
        const result = await axios.put(import.meta.env.VITE_API_URL + endpoint, payload, {
            headers: {
                Authorization: token
            }
        });
        return result;
    } catch (error:any) {
        toast.error(error.message);
    }
    
};


const post = async (endpoint: string, payload: any) => {
    try{
        await axios.post(import.meta.env.VITE_API_URL + endpoint, payload, {
            headers: {
                Authorization: token
            }
        });
    }
    catch(error:any){
        toast.error(error.message);
    }
    
}

const remove = async (endpoint: string, payload: any) => {
    try{
        await axios.delete(import.meta.env.VITE_API_URL + endpoint, {
            data: payload,
            headers: {
                Authorization: token
            }
        });
    }
    catch(error:any){
        toast.error(error.message);
    }
}

// decode user details from user JWT token
const getUser = () => {
    if( token === undefined){
        return null;
    }
     const user = jwtDecode(token);
    return user;
}

//
const isDirector = () => {
    const user = getUser() as any;
    return(
        user?.position === "Director" )
}

export default {
    login,
    get,
    put,
    post,
    remove,
    getUser,
    isDirector
}