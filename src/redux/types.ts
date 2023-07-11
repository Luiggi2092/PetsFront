export interface Product {
    id:number,
    name:string,
    imagen:string,
    price:number,
    available: number,
    averageRating:number,
    

}

export interface FilterName {
    id:number,
    name:string,
    imagen:string,
    price:number,
}

export interface TypeProduct {
    name:string
}


export default Product