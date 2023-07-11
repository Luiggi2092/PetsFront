import { Product, TypeProduct,Carrito } from "../interfaces/Products";
import { Pet,TypePet,Vaccines } from "../interfaces/Pets"
import { User, UsersType } from "../interfaces/Users";
import { GET_PRODUCTS,PAGE_NUMBER, GET_TYPES_PRODUCTS, GET_PETS, GET_PETSID, GET_CAT,POST_PRODUCT,CARSHOP,TYPEPET,POSTPET,REMOVE_FROM_CART, USERS_TYPE, FETCH_USERS, DELETE_USER, SUSPEND_USER, GET_VACUNAS} from "./actions"

interface State {
    count: number;
    numPage: number;
    products: Product[];
    productTypes: TypeProduct[];
    name: string,
    Fil: boolean,
    Pets: Pet[],
    PetsFill: Pet[],
    PostProduct:Product[],
    Shop:Carrito[],
    ProdCat:Product[],
    TypePet:TypePet[],
    PostPet:Pet[],
    Vaccines:Vaccines[]
    UsersType: UsersType[],
    users: User[],

    
}

const initialState: State = {
    count: 0,
    numPage: 1,
    products: [],
    productTypes: [],
    name: "",
    Fil: false,
    Pets: [],
    PetsFill: [],
    PostProduct:[],
    Shop:[],
    ProdCat:[],
    TypePet:[],
    PostPet:[],
    Vaccines:[],
    UsersType: [],
    users: [],

}

const storedCartItems = localStorage.getItem('cartItems');
if (storedCartItems) {
  initialState.Shop = JSON.parse(storedCartItems);
  initialState.count = initialState.Shop.length;
}



const counterReducer = (state = initialState, action: any): State => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case PAGE_NUMBER:
            return {
                ...state,
                numPage: action.payload
            }
        case GET_TYPES_PRODUCTS:
            return {
                ...state,
                productTypes: action.payload,
            }
        case GET_PETS:
            return {
                ...state,
                Pets: action.payload
            }
        case GET_PETSID:
            return {
                ...state,
                PetsFill: action.payload
            }
         case GET_CAT:
             const Cat = state.products.filter((e: any) => {
                 for (let f in e.TypeProduct) {
                     if (e.TypeProduct[f] == action.payload) {
                         return e.TypeProduct;
                     };
                 }
                })
              return {
                 ...state,
                 ProdCat:Cat
                 }

           case POST_PRODUCT:
                 return {
                    ...state,
                    PostProduct:action.payload
                 } 
           case CARSHOP : 
                 return {
                    ...state,
                    Shop: [...state.Shop , action.payload],
                    count : state.count + 1
                 } 
           case TYPEPET : 
             return {
                   ...state,
                   TypePet:action.payload,
             }   
            case POSTPET:
                return {
                    ...state,
                    PostPet:action.payload

                }
             case REMOVE_FROM_CART:
                const filteredItems = state.Shop.filter(item=> item.name !== action.payload) 
                return {
                    ...state,
                    Shop: filteredItems,
                    count: state.count - 1,
                }
            case GET_VACUNAS:
                 return {
                    ...state,
                    Vaccines:action.payload

                }
            case USERS_TYPE:
                return {
                    ...state, UsersType: action.payload
                }
            default:
            return state;

            case FETCH_USERS:
                return {
                    ...state, users: action.payload
                }
            
            case DELETE_USER:
                return {
                    ...state, users: action.payload
                }
            
            case SUSPEND_USER:
                return {
                    ...state, users: action.payload
                }
    }
};

export default counterReducer;