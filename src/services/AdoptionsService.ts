import axios from "axios";

export class adoptions {
    public static getAdoptions(): Promise<any> {
        return axios.get('/form');
    }
}