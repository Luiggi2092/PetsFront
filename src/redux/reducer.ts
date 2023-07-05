import { Product, TypeProduct,Carrito } from "../interfaces/Products";
import { Pet,TypePet } from "../interfaces/Pets"
import { GET_PRODNAME, INCREMENT, GET_PRODUCTS, FILL_NAME, FILL_PROD, PAGE_NUMBER, GET_TYPES_PRODUCTS, GET_PETS, GET_PETSID, GET_CAT,FILTERS,FILTERS1,POST_PRODUCT,CARSHOP,TYPEPET,POSTPET,FILLPRECMIN,FILLPRECMAX,FILLPROPREC,FILTERS2,FILTERS3,REMOVE_FROM_CART } from "./actions"

interface State {
    count: number;
    numPage: number;
    products: Product[];
    productTypes: TypeProduct[];
    productsxName: Product[];
    name: string,
    Fil: boolean,
    Pets: Pet[],
    PetsFill: Pet[],
    Filters:Product[],
    Filters1:Product[],
    PostProduct:Product[],
    Shop:Carrito[],
    ProdCat:Product[],
    TypePet:TypePet[],
    PostPet:Pet[],
    min:number,
    max:number,
    ProdPrec:Product[],
    ProdFillPrec:Product[],
    ProdFillPrecxName:Product[],

    
}

const initialState: State = {
    count: 0,
    numPage: 1,
    products: [],
    productsxName: [],
    productTypes: [],
    name: "",
    Fil: false,
    Pets: [],
    PetsFill: [],
    Filters:[],
    Filters1:[],
    PostProduct:[],
    Shop:[],
    ProdCat:[],
    TypePet:[],
    PostPet:[],
    min:0,
    max:0,
    ProdPrec:[],
    ProdFillPrec:[],
    ProdFillPrecxName:[],

    

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
        case FILL_NAME:
            return {
                ...state,
                name: action.payload
            }
        case PAGE_NUMBER:
            return {
                ...state,
                numPage: action.payload
            }
        case GET_PRODNAME:
            return {
                ...state,
                productsxName: action.payload,
            }
        case FILL_PROD:
            return {
                ...state,
                Fil: action.payload,
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

          case FILTERS: 
               const FilCatnombre = state.productsxName.filter((e:any)=> 
                {
                    for(let dato in e.TypeProduct){
                           if(e.TypeProduct[dato] == action.payload){
                               return action.payload;
                           } 
                          
                    }})
               
                 return {
                    ...state,
                    Filters:FilCatnombre
                 } 
          case FILTERS1:
                const FillxnombreCat = 
                state.ProdCat.filter((e:any)=> e.name.toLowerCase().includes(action.payload.toLowerCase()));  
                console.log(FillxnombreCat);
                return {
                    ...state,
                    Filters1: FillxnombreCat
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
            case FILLPRECMIN:
                console.log(action.payload);
                  return {
                      ...state,
                      min: action.payload
                  }
            case FILLPRECMAX:
                 console.log(action.payload);
                  return {
                      ...state,
                      max: action.payload
                  }
            case FILLPROPREC:
                   const FillPrec = state.products.filter((e:any)=> e.price > state.min && e.price < state.max);
                   

                  return {
                      ...state,
                      ProdPrec: FillPrec
                  }  
            case FILTERS2 :
                  const Fill2 = state.ProdPrec.filter((e:any)=> {
                    for(let dato in e.TypeProduct){
                        if(e.TypeProduct[dato] == action.payload){
                            return action.payload;
                        } 
                       
                 }})
        
                 return {
                    ...state,
                    ProdFillPrec: Fill2  
                 }
            case FILTERS3: 
                const Fill3 = state.ProdPrec.filter((e:any)=> e.name.toLowerCase().includes(action.payload.toLowerCase()))        
                 
                return {
                    ...state,
                    ProdFillPrecxName:Fill3,
                }
             case REMOVE_FROM_CART:
                const filteredItems = state.Shop.filter(item=> item.name !== action.payload) 
                return {
                    ...state,
                    Shop: filteredItems,
                    count: state.count - 1,
                }   
        
            default:
            return state;
    }
};

export default counterReducer;