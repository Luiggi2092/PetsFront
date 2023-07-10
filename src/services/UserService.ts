import axios from "axios";


export class UserService {

    public static PostUser(Us:any):Promise<any>{
        console.log('buscando error')
        return axios.post('/user',Us)
    }

    public static PostLogueo(Aut:any):Promise<any>{
        return axios.post('/login',Aut)
    } 
}