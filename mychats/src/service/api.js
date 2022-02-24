import axios from 'axios'

const url = 'http://localhost:8000';

export const addUser = async (data)=>{
    try {
       return await axios.post(`${url}/add`,data)
    } catch (error) {
        console.log('Error AdduserFe :',error)
    }
}
export const getUsers = async ()=>{
    try {
       return await axios.get(`${url}/users`)
    } catch (error) {
        console.log('Error GetUsersFe :',error)
    }
}

export const setConversation = async (data)=>{
    try {
        await axios.post(`${url}/conversation/add`,data)
    } catch (error) {
        console.log('setConversation error:',error)
    }
}

export const getConversation = async (data) =>{
    try {
       let responce = await axios.post(`${url}/conversation/get`,data);
       return  responce.data;
    } catch (error) {
        console.log('getConversation error:',error)
    }
}

export const sendMessage = async (data) =>{
    try {
        await axios.post(`${url}/message/send`,data);
    //    return  responce.data;
    } catch (error) {
        console.log('sendMessage error:',error)
    }
}

export const getChats = async (id) =>{
    try {
        return await axios.get(`${url}/message/chats/${id}`);
    } catch (error) {
        console.log('getChats error:',error)
    }
} 