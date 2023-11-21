import axios from "axios"

let token: string | undefined;

const login = async (email: string, password: string): Promise<string|boolean|undefined> => {
    const result = await axios.post(import.meta.env.VITE_API_URL + '/login', { email, password });
    console.log('Token is:', result.data);
    token = result.data;
    return token;
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
    } catch (error) {
        if (error.response.status === 401) {
            // alert('You are not logged in.');
            // window.location.reload();
        }
        // alert(error.message);
    }
    
};

const post = async (endpoint: string, payload: any) => {
    await axios.post(import.meta.env.VITE_API_URL + endpoint, payload, {
        headers: {
            Authorization: token
        }
    });
}


// TO DO:
// delete / remove func


export default {
    login,
    get,
    post
}