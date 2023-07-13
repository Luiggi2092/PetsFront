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

export class typeUsers {
    public static getUsersType(): Promise<any> {
        return axios.get('/usertype');
    }
}

export class FormAdoption{
    public static createForm(form:any): Promise<any>{
        return axios.post('/forms', form)
    }
}