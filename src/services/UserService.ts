import axios from "axios";


export class UserService {

    public static PostUser(Us:any):Promise<any>{
        return axios.post('/user',Us)
    }
}