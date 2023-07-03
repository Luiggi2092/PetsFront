export interface Product {
    id: number,
    name: string,
    imagen: string,
    price: number,
    available: number,
    averageRating: number,
    TypeProduct: string
}

export interface FilterName {
    id: number,
    name: string,
    imagen: string,
    price: number,
}

export interface TypeProduct {
    id:string,
    name: string
}

export interface Carrito {
    imagen: string,
    name:string,
    precio:number,
    cantidad: number
}




export default Product