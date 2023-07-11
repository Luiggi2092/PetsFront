import { Product, TypeProduct,Carrito } from '../interfaces/Products'
import { Pet,TypePet,Vaccines } from '../interfaces/Pets'
import { User, UsersType } from '../interfaces/Users'

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
export const FILLPRECMIN = 'FILLPRECMIN';
export const FILLPRECMAX = 'FILLPRECMAX';
export const FILLPROPREC = 'FILLPROPREC';
export const FILTERS2 = 'FILTERS2';
export const FILTERS3 = 'FILTERS3';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const FILTERS4 = 'FILTERS4';
export const FILTERS5 = 'FILTERS5';
export const USERS_TYPE = 'USERS_TYPE';
export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';
export const SUSPEND_USER = 'SUSPEND_USER';
export const GETVACU = 'GETVACU';


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

export const FillPrecmin=(min:number)=>{
       return {
          type:'FILLPRECMIN',
          payload : min,
       }
}

export const FillPrecmax=(max:number)=> {
        console.log(max);
       return {
           type :'FILLPRECMAX',
           payload: max,
       }
}

export const FillPrecArray=()=>{
      return {
        type: 'FILLPROPREC',
      }
}

export const filters2=(fill:string)=>{
      return {
        type: 'FILTERS2',
        payload: fill
      }
}

export const filter4=(fill:string)=>{
     return {
          type:'FILTERS3',
          payload: fill
     }
}


export const removeCart = (name:string)=> {
    return {
         type: 'REMOVE_FROM_CART',
         payload: name
    }

}

export const filter5 = (fill:string)=> {
     return {
           type: 'FILTERS4',
           payload: fill,
     }
}

export const filter6 = (fill:string)=> {
     return {
            type: 'FILTERS5',
            payload: fill
     }
}

export const getUsersType = (usersType: UsersType[]) => {
    return {type: 'USERS_TYPE', payload: usersType}
}

export const fetchUsers = (users: User[]) => {
    return {
        type: 'FETCH_USERS',
        payload: users
    }
}

export const deleteUser = (users: User[]) => {
    return {
        type: 'DELETE_USER',
        payload: users
    }
}

export const suspendUser = (users: User[]) => {
    return {
        type: 'SUSPEND_USER',
        payload: users
    }
}

export const getVaccines=(Vac:Vaccines)=>{
    return {
        type : 'GETVACU',
        payload: Vac
    }
}
