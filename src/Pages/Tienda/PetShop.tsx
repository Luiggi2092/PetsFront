import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./PetShop.module.css"
import Modal from "../../components/Modal/Modal"
import { useSelector } from "react-redux";
import { useEffect, useState,useRef } from "react";
import { ProductService } from '../../services/ProductService'
import { getProductos, getProductosxName, getTypesProducts, getProdType,filters,filters1, SetPagina,FillPrecmin,FillPrecmax,FillPrecArray,filters2,filter4 } from "../../redux/actions"
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch } from "react-redux";
import Product from "../../interfaces/Products";
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
  const Fil = useSelector((state: any) => state.Fil);
  let products = useSelector((state: any) => state.products);
  let prodName = useSelector((state: any) => state.productsxName);
  let CateProd = useSelector((state:any)=> state.productTypes);
  let ProdCat = useSelector((state:any)=> state.ProdCat);
  let ProdFillPrec = useSelector((state:any)=> state.ProdFillPrec);
  let [filtro,setFiltro]= useState(false);
   let [filCat,setfilCat]= useState(false);
  let [filtecom,setFiltecom]=useState(false);
  let [filtercom1,setFillcom1]= useState(false);
  let [filtercom2,setFillcom2] = useState(false);
  let [filtercom3,setFillcom3] = useState(false);
  let [filtercom4,setFillcom4] = useState(false);
  let FILTROS = useSelector((state:any)=> state.Filters);
  let FILTROS1 = useSelector((state:any)=> state.Filters1);
  let FillPrec = useSelector ((state:any)=> state.ProdPrec);
  let FillPrecName = useSelector((state:any)=> state.ProdFillPrecxName);
  let [items,SetItems] = useState({
     item:[]
  })


   const [Search,setSearch]= useState({
           name:"",
           
         
   })

   const [Category,setCategory]= useState({
          category: "",
   })

   const [Precio,setPrecio]= useState({
          price : "",
   })


  
  const dispatch = useDispatch();


  const AllProducts=()=>{
      
      setFiltro(false);
      setFillcom1(false);
      setfilCat(false);
      setFiltecom(false);
      setFillcom2(false);
      setFillcom3(false); 
      setFillcom4(false); 
          
      setSearch({...Search,name:""})
      setCategory({...Category,category:""});
      setPrecio({...Precio,price:""})



     
  }



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


   console.log(FillPrec);

  const handleModal = () => {
    setOpenModal(!openModal);
  }

   const handleCat = (event: React.ChangeEvent<HTMLSelectElement>)=> {

         if(Search.name){
             setFiltro(false);
               dispatch(filters(event.currentTarget.value))
               SetItems({...items,item:[]})
               setFiltecom(true)
               setFillcom1(false);
               setfilCat(false)

        

          }else if(Precio.price){
               setFiltro(false);
               setFiltecom(false);
               setFillcom1(false);
               setFillcom2(false);
               setfilCat(false);
               setFillcom3(true); 
               dispatch(filters2(event.target.value))
                
             
          
          }
          
          
          else{
    
      const SearchCat = event.currentTarget.value;
      if(SearchCat !== "0"){
      dispatch(getProdType(SearchCat));
      setFiltro(false)
      setFillcom1(false);
      setFiltecom(false);

      setfilCat(true)

       setCategory({...Category,category:event.currentTarget.value});
       
      }else{
        AllProducts();
      }
    }
   
  }

  const handleRango = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const property = event.target.value;

      const value = event.target.value;
      setfilCat(false)
      setFiltro(false)
      setFiltecom(false)
      setFillcom1(false)
      setFillcom2(true);
      dispatch(SetPagina(1))
      
      if(value === "rango1"){
 

        const min=10
        const max=50
        dispatch(FillPrecmin(min))
        dispatch(FillPrecmax(max))
        dispatch(FillPrecArray())
        setPrecio({...Precio,price:event.target.value}) 
        
      }
      
      if(value === "rango2"){
        const min=50
        const max=100
        dispatch(FillPrecmin(min))
        dispatch(FillPrecmax(max))
        dispatch(FillPrecArray())
        setPrecio({...Precio,price:event.target.value})
          

      }
      
      if(value === "rango3"){
        console.log("llegas");
        const min=100
        const max=200 
        dispatch(FillPrecmin(min))
        dispatch(FillPrecmax(max))
        dispatch(FillPrecArray())
        setPrecio({...Precio,price:event.target.value})
        
      }
      if(value === "rango4"){
        const min=200
        const max=90000 
        dispatch(FillPrecmin(min))
        dispatch(FillPrecmax(max))
        dispatch(FillPrecArray())
        setPrecio({...Precio,price:event.target.value})

      }

      if(value === "0"){

         AllProducts();            
      }

  }




  const handleName= (event: React.ChangeEvent<HTMLInputElement>)=> 
  {
     
     if(Category.category){
          setFiltro(false);
          dispatch(filters1(event.currentTarget.value))
          //SetItems({...items,item:[]})
          setFiltecom(false);
          setFillcom1(true);
          setfilCat(false);
        
        } else if (Precio.price){
          setFiltro(false);
          setFiltecom(false);
          setFillcom1(false);
          setFillcom2(false);
          setfilCat(false);
          setFillcom3(false);
          setFillcom4(true); 
          dispatch(filter4(event.target.value))
          
        } 
        
        
        else{


    
    const SeachName = event.currentTarget.value;
    console.log(SeachName);
    if(event.currentTarget.value !== ""){
    (async function () {
      const response = await ProductService.getProductsxName(SeachName)
      .catch(response => alert(response.data.errors.error));
      console.log(response.data)
      setfilCat(false)
      setFiltro(true)
      dispatch(SetPagina(1))
      dispatch(getProductosxName(response.data))
    }
    )();
     setSearch({...Search,name:event.currentTarget.value})
    }
    else{
      AllProducts();
      
    }
    
   }

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
           {CateProd.map((e:Product,index:any)=> {
            return <option className={style.option} key={index}>{e.name}</option>
           })}
        </select>
      </div>
      <div className={`${style.Prec} ${style.formcontainer}`}>
          <h5>Precios</h5>
         <select className={style.select} onChange={handleRango}>
            <option className={style.option} value="0">Seleccion :</option>
            <option className={style.option} value="rango1"> S/.10 a S/. 50 </option>
            <option className={style.option} value="rango2"> S/.50 a S/.100</option>
            <option className={style.option} value="rango3"> S/100 a S/.200</option>
            <option className={style.option} value="rango4"> S/.200 a mas</option>
         </select>
      </div>
      <div className={`${style.butNew} left-container`}>
        <button className={style.newProd} onClick={handleModal}>New Product</button>
        <Modal openModal={openModal} cambiarEstado={setOpenModal} CateProd={CateProd}></Modal>
      </div>

      <div className={`${style.containerc} ${style.cardscontainer}`}>

        {filtro ? <CardsShop products={prodName} firstIndex={firstIndex} lastIndex={lastIndex} /> :
        filCat ? <CardsShop products={ProdCat} firstIndex={firstIndex} lastIndex={lastIndex} />:
        filtecom ? <CardsShop products={FILTROS} firstIndex={firstIndex} lastIndex={lastIndex} />:  
        filtercom1 ? <CardsShop products={FILTROS1} firstIndex={firstIndex} lastIndex={lastIndex} />: 
        filtercom2 ? <CardsShop products={FillPrec} firstIndex={firstIndex} lastIndex={lastIndex} />:
        filtercom3 ? <CardsShop products={ProdFillPrec} firstIndex={firstIndex} lastIndex={lastIndex} /> :
        filtercom4 ? <CardsShop products={FillPrecName} firstIndex={firstIndex} lastIndex={lastIndex} /> :
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
        Fil={filtro}
        FillCat={filCat}
        productsCat={ProdCat}
        filtecom={filtecom}
        productsfil={FILTROS}
        filtecom1={filtercom1}
        filtercom2={filtercom2}
        FillPrec={FillPrec}
        productsfil1={FILTROS1}
      />
    </div>
  )
}

export default PetShop;