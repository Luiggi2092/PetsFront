import { Product, TypeProduct,Carrito } from '../interfaces/Products'
import { Pet,TypePet } from '../interfaces/Pets'
import axios from 'axios';

export const INCREMENT = 'INCREMENT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODNAME = 'GET_PRODNAME';
export const FILL_PROD = 'FILL_PROD';
export const FILL_NAME = 'FILL_NAME';
export const PAGE_NUMBER = 'PAGE_NUMBER';
export const GET_TYPES_PRODUCTS = 'GET_TYPES_PRODUCTS';
export const GET_PETS = 'GET_PETS';
export const FILL_ID = 'FILL_ID';
export const GET_PETSID = 'GET_PETSID';
export const GET_CAT = 'GET_CAT';
export const FILTERS = 'FILTERS';
export const FILTERS1 = 'FILTERS1';
export const POST_PRODUCT = 'POST_PRODUCT'
export const CARSHOP = 'CARSHOP';
export const TYPEPET = 'TYPEPET';
export const POSTPET = 'POSTPET';
export const GET_VACCINES = 'GET_VACCINES'

export const increment = () => {
    return {
        type: 'INCREMENT',
    };
};

export const getProductos = (products: Product[]) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}

export const getProductosxName = (products: Product[]) => {
    return {
        type: 'GET_PRODNAME',
        payload: products
    }
}

export const FillName = (nombre: string) => {
    return {
        type: 'FILL_NAME',
        payload: nombre
    }
}

export const Fill = (fil: boolean) => {
    return {
        type: 'FILL_PROD',
        payload: fil
    }
}

export const SetPagina = (page: number) => {
    return {
        type: 'PAGE_NUMBER',
        payload: page
    }
}

export const getTypesProducts = (typeProduct: TypeProduct[]) => {
    return {
        type: 'GET_TYPES_PRODUCTS',
        payload: typeProduct
    }
}

export const getPets = (Pets: Pet[]) => {
    return {
        type: 'GET_PETS',
        payload: Pets
    }
}

export const getPetsid = (Pets: Pet[]) => {
    return {
        type: 'GET_PETSID',
        payload: Pets
    }

}

export const getProdType = (fill: string) => {
    return {
        type: 'GET_CAT',
        payload: fill
    }
}

export const filters = (fill:string)=> {
     return {
          type: 'FILTERS',
          payload: fill
     }
}

export const filters1=(fill:string)=>{
      return {
          type: 'FILTERS1',
          payload:fill,
      }
}

export const PostProduct=(Pro:Product)=>{
      return {
           type: 'POST_PRODUCT',
           payload: Pro
      }
}


export const CarritoCompas=(Car:Carrito)=>{
       return {
             type: 'CARSHOP',
             payload: Car
       }
}


export const getTypesPet=(Type:TypePet)=>{
      return  {
          type: 'TYPEPET',
          payload : Type
      } 
    
     
}


export const PostPet=(Pet:any)=> {
       return {
            type: 'POSTPET',
            payload: Pet
       }

}

export const getVaccines = () => {
    return async function (dispatch:any) {
        const vaccines = await axios.get('/vaccines')
        dispatch({
            type: GET_VACCINES, payload: vaccines
        })
    }
}