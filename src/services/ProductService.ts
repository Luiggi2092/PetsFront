import axios from "axios";


export class ProductService {
    public static getProducts():Promise<any>{
        return axios.get('/product')
    }
    
    public static getProductsxName(name:string):Promise<any>{
                 
        return axios.get(`/product/?name=${name}`)
    }

    public static getTypesProducts():Promise<any>{
        return axios.get(`/typeProduct`)
    }

    public static PostProduct(pro:any):Promise<any>{
        return axios.post(`/product`,pro) 
    }

}


