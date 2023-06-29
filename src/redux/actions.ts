import {Product,TypeProduct} from './types'


export const INCREMENT = 'INCREMENT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODNAME = 'GET_PRODNAME';
export const FILL_PROD = 'FILL_PROD';
export const FILL_NAME = 'FILL_NAME';
export const PAGE_NUMBER = 'PAGE_NUMBER';
export const GET_TYPES_PRODUCTS = 'GET_TYPES_PRODUCTS';



export const increment = ()=>{
    return {
        type:'INCREMENT',
    };
};

export const getProductos = (products :Product[])=> {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}

export const getProductosxName = (products:Product[])=>{
    return  {
        type: 'GET_PRODNAME',
        payload: products
    }

}


export const FillName = (name:string)=>{
    return {
        type: 'FILL_NAME',
        payload: name
    }
}

export const Fill =(fil:boolean)=> {
return {
     type:'FILL_PROD',
     payload:fil
}
}

export const SetPagina = (page:number)=>{
    return {
        type: 'PAGE_NUMBER',
        payload: page
    }
}

export const getTypesProducts = (typeProduct:TypeProduct[])=>{
    return {
        type: 'GET_TYPES_PRODUCTS',
        payload: typeProduct 
    }
}

