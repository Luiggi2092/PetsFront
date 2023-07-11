import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./PetShop.module.css"
import Modal from "../../components/Modal/Modal"
import { useSelector } from "react-redux";
import { useEffect, useState,useRef } from "react";
import { ProductService } from '../../services/ProductService'
import { getProductos, getTypesProducts,SetPagina } from "../../redux/actions"
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch } from "react-redux";
import React from "react";


const PetShop: React.FC = () => {
  const numPage = useSelector((state: any) => state.numPage);
  const inputRef = useRef<HTMLInputElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const [porPagina] = useState<number>(9);
  const lastIndex = numPage * porPagina //10
  const firstIndex = lastIndex - porPagina
  const [maxPageNumberLimit, setMaxpageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  let products = useSelector((state: any) => state.products);
  let CateProd = useSelector((state:any)=> state.productTypes);
  let arrayprec = [[10,20],[20,60],[60,100]];
  //const [productos, setProductos] = useState<Product[]>([]); // Array de productos
  const [filtros, setFiltros] = useState<any>({
          name: "",
          TypeProductId:"",
          price:[],
  }); // Filtros aplicados


   useEffect(()=>{
    (async function () {
      const response = await ProductService.getProducts();
      console.log("todos los prod" , response.data);
      const aplyFil = applyAllFilters(response.data,filtros);
      console.log("filtros de aply" , aplyFil , filtros);
      dispatch(getProductos(applyAllFilters(response.data,filtros)))

      
    })();
     
   },[filtros])




  type Product = {
    id: number,
    name: string,
    imagen: string,
    price: number,
    available: number,
    averageRating: number,
    TypeProductId: string
  }
  
  function applyAllFilters(arrayAllProducts: Product[], filters: Product): Product[] {
    return arrayAllProducts.filter(product => {
      let categoriaMatch = true;
      let nombreMatch = true;
      let precioMatch = true;
  
      // Filtro por categoria
      
      if (filters.TypeProductId !=="0" && 
          filters.TypeProductId ) {
      
        categoriaMatch = product.TypeProductId === filters.TypeProductId;
      }
  
      // Filtro por nombre
      if (filters.name) {
        nombreMatch = product.name.toLowerCase().includes(filters.name.toLowerCase());
        
      } 
  
      // Filtro por precio
      if (filters.price) {
        
        if(Array.isArray(filters.price) && filters.price.length === 0 ){
          
        }
      
        else if(Array.isArray(filters.price) && filters.price.length){ 
        precioMatch = product.price >= filters.price[0] && product.price <= filters.price[1];
        
        }
        
        else {
          precioMatch = product.price > filters.price;
        }
      }
  
      return categoriaMatch && nombreMatch && precioMatch;
    });
  }


  // useEffect(()=> {
  //      setProductos(applyAllFilters(products,filtros))
  // },[filtros])
   
 

  const dispatch = useDispatch();

   useEffect(() => {
   (async function () {
       const response = await ProductService.getProducts();
       dispatch(getProductos(response.data))
     })();
     (async function () {
       const response = await ProductService.getTypesProducts();
       dispatch(getTypesProducts(response.data));
     })();
   }, [])
  


  const handleModal = () => {
    setOpenModal(!openModal);
  }

   const handleCat = (event: React.ChangeEvent<HTMLSelectElement>)=> {


    
     
    
    setFiltros({...filtros,TypeProductId:event.target.value})
    dispatch(SetPagina(1))

    

  }
          
          
          
          
         
  

  const handleRango = (event: React.ChangeEvent<HTMLSelectElement>) => {

    
    if(event.target.value== "seleccion"){
        setFiltros({...filtros,price:[]})
        return
    }
   
   if(parseInt(event.target.value) > arrayprec.length){
       
    setFiltros({...filtros,price:parseInt(event.target.value)})
    dispatch(SetPagina(1))
    return    
   }  
    setFiltros({...filtros,price:arrayprec[parseInt(event.target.value)]})
    dispatch(SetPagina(1)) 
      
}






  const handleName= (event: React.ChangeEvent<HTMLInputElement>)=> 
  {
    
       setFiltros({...filtros,name:event.target.value})
       dispatch(SetPagina(1))
  }






  return (
    <div className={style.containerformu}>
      <h1 className={style.titulo}>Pets Shop</h1>
      <div className={`${style.titCat} ${style.formcontainer}`}>
      <h5>Nombre</h5>
      <input className={style.input} type="text" onChange={handleName} ref={inputRef} placeholder="Busca tu Producto..." />
      </div>
      <div className={`${style.titCat} ${style.formcontainer} left-container`}>
        <h5>Categorias</h5>
        <select className={style.select} onChange={handleCat} id="selcat">
          <option className={style.option} value="0">Seleccion :</option>
           {CateProd.map((e:any,index:any)=> {
            return <option className={style.option} key={index} value={e.id}>{e.name}</option>
           })}
        </select>
      </div>
      <div className={`${style.Prec} ${style.formcontainer}`}>
          <h5>Precios</h5>
         <select className={style.select} onChange={handleRango}>
            <option className={style.option} value="seleccion">Seleccion :</option>
            <option className={style.option} value="0"> S/.10 a S/. 20 </option>
            <option className={style.option} value="1"> S/.20 a S/.60</option>
            <option className={style.option} value="2"> S/60 a S/.100</option>
            <option className={style.option} value="200"> S/.200 a mas</option>
         </select>
      </div>
      <div className={`${style.butNew} left-container`}>
        <button className={style.newProd} onClick={handleModal}>New Product</button>
        <Modal openModal={openModal} cambiarEstado={setOpenModal} CateProd={CateProd}></Modal>
      </div>

      <div className={`${style.containerc} ${style.cardscontainer}`}>

        
         <CardsShop products={products} firstIndex={firstIndex} lastIndex={lastIndex} />
      </div>
      <Paginado pagina={numPage}
        maxPageNumberLimit={maxPageNumberLimit}
        products={products}
        setMaxpageNumberLimit={setMaxpageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        porPagina={porPagina}
        setMinPageNumberLimit={setMinPageNumberLimit}
              />
    </div>
  )
}

export default PetShop;