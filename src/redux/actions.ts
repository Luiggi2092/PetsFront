import { Product, TypeProduct,Carrito } from '../interfaces/Products'
import { Pet,TypePet,Vaccines } from '../interfaces/Pets'

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PAGE_NUMBER = 'PAGE_NUMBER';
export const GET_TYPES_PRODUCTS = 'GET_TYPES_PRODUCTS';
export const GET_PETS = 'GET_PETS';
export const FILL_ID = 'FILL_ID';
export const GET_PETSID = 'GET_PETSID';
export const GET_CAT = 'GET_CAT';
export const POST_PRODUCT = 'POST_PRODUCT'
export const CARSHOP = 'CARSHOP';
export const TYPEPET = 'TYPEPET';
export const POSTPET = 'POSTPET';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GETVACU = 'GETVACU'


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

export const getVaccines=(Vac:Vaccines)=>{
      return {
          type : 'GETVACU',
          payload: Vac
      }
}



export const PostPet=(Pets:Pet)=> {
       
       console.log(Pets);
       return {
            type: 'POSTPET',
            payload: Pets
       }

}




export const removeCart = (name:string)=> {
    return {
         type: 'REMOVE_FROM_CART',
         payload: name
    }

}

