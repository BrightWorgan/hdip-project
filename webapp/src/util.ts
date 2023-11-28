import axios from "axios"
import toast from "react-hot-toast";

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

const get = async (endpoint: string) => {
    console.log('Token is:', token);
    try {
        const result = await axios.get(import.meta.env.VITE_API_URL + endpoint, {
            headers: {
                Authorization: token
            }
        });
        return result;
    } catch (error:any) {
        // if (error.response.status === 401) {
        //     // alert('You are not logged in.');
        //     // window.location.reload();
        // }
        // alert(error.message);
        // console.log(error)
        // 
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



export default {
    login,
    get,
    post,
    remove
}