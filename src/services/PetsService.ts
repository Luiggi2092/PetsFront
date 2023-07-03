import axios from "axios";

export class PetsService {
    public static getPets():Promise<any>{
        return axios.get('/pets')
    }

    public static getPetsId(id:string):Promise<any>{
        return axios.get(`/pets/${id}`)
    }

    public static getPetsTypes():Promise<any>{
        return axios.get('/PetTypes')
    } 

    public static PostPets(Pe:any):Promise<any>{
        return axios.post('/pets',Pe)
    }


}