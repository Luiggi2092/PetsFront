import axios from "axios";

export class PetsService {
    public static getPets():Promise<any>{
        return axios.get('/pets')
    }

    public static getPetsId(id:string):Promise<any>{
        return axios.get(`/pets/${id}`)
    }
}