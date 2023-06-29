//import React, { useState } from "react";
//import {items} from "../../data/index"
import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./PetShop.module.css"
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import {ProductService}   from '../../services/ProductService'
import {getProductos,getProductosxName,getTypesProducts} from "../../redux/actions"
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch } from "react-redux";
//import { Product } from '../../redux/types';



const PetShop: React.FC = () => {
  
       const numPage = useSelector((state:any)=>state.numPage);
  //  const [pagina,setPagina] = useState<number>(numPage);
  
    const [porPagina] = useState<number>(9);
    const lastIndex= numPage * porPagina //10
    const firstIndex= lastIndex - porPagina
    const [maxPageNumberLimit,setMaxpageNumberLimit] = useState(5);
    const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);
   const Fill = useSelector((state:any)=> state.Fil);
   let products = useSelector((state:any)=> state.products);
   let prodName = useSelector((state:any)=> state.productsxName);
   let SearchName = useSelector((state:any)=> state.name);
   let TypesProducts = useSelector((state:any)=>state.productTypes);
   const dispatch = useDispatch();

   console.log(TypesProducts);
    
   //const FillName = products.filter((products:Product)=> products.name.toLowerCase().includes(SearchName.toLowerCase())) 
    
    

   useEffect(()=>{
    (async function() {
        const response = await ProductService.getProducts();
        dispatch(getProductos(response.data))
    })();  
    (async function() {
        const response = await ProductService.getTypesProducts();
        dispatch(getTypesProducts(response.data));  
      
    })();    
  
},[])

  
useEffect(()=>{
  if(Fill){
  (async function () {
      const response = await ProductService.getProductsxName(SearchName);
      dispatch(getProductosxName(response.data))
        
   }
   )();
  }
},[Fill])




 

  return (

    <div>
      <h1 className={style.titulo}>Pets Shop</h1>
       <aside>
        </aside> 
       <div className={style.container}>
      
        {Fill ? <CardsShop products={prodName} firstIndex={firstIndex} lastIndex={lastIndex} />:
                <CardsShop products={products} firstIndex={firstIndex} lastIndex={lastIndex} />}
      </div>
      <Paginado pagina={numPage} 
      maxPageNumberLimit={maxPageNumberLimit}
      products={products}
      productFill={prodName}
      setMaxpageNumberLimit={setMaxpageNumberLimit}
      minPageNumberLimit={minPageNumberLimit}
      porPagina={porPagina}
      setMinPageNumberLimit={setMinPageNumberLimit}
      Fill={Fill}
      />
    </div>

  )

}

export default PetShop;