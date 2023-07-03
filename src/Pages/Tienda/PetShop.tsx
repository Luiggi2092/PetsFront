import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./PetShop.module.css"
import Modal from "../../components/Modal/Modal"
import { useSelector } from "react-redux";
import { useEffect, useState,useRef } from "react";
import { ProductService } from '../../services/ProductService'
import { getProductos, getProductosxName, getTypesProducts, getProdType,filters,filters1 } from "../../redux/actions"
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch } from "react-redux";
import Product from "../../interfaces/Products";

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
  let [filtro,setFiltro]= useState(false);
   let [filCat,setfilCat]= useState(false);
  let [filtecom,setFiltecom]=useState(false);
  let [filtercom1,setFillcom1]= useState(false);
  let FILTROS = useSelector((state:any)=> state.Filters);
  let FILTROS1 = useSelector((state:any)=> state.Filters1);
  let [items,SetItems] = useState({
     item:[]
  })


   const [Search,setSearch]= useState({
           name:"",
           
         
   })

   const [Category,setCategory]= useState({
          category: "",
   })

  
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

         if(Search.name){
             setFiltro(false);
               dispatch(filters(event.currentTarget.value))
               SetItems({...items,item:[]})
               setFiltecom(true)
             setFillcom1(false);
             setfilCat(false)

        

          }else{
    
      const SearchCat = event.currentTarget.value;
      if(SearchCat !== "0"){
      dispatch(getProdType(SearchCat));
      setFiltro(false)
      setFillcom1(false);
      setFiltecom(false);

      setfilCat(true)

       setCategory({...Category,category:event.currentTarget.value});
       
      }else{
        
        setFiltro(false);
        setFillcom1(false);
        setfilCat(false);
        setFiltecom(false);
        
       setCategory({...Category,category:""}); 
      }
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
        
        } else{


    
    const SeachName = event.currentTarget.value;
    console.log(SeachName);
    if(event.currentTarget.value !== ""){
    (async function () {
      const response = await ProductService.getProductsxName(SeachName)
      .catch(response => alert(response.data.errors.error));
      console.log(response.data)
      setfilCat(false)
      setFiltro(true)
      
      dispatch(getProductosxName(response.data))
    }
    )();
     setSearch({...Search,name:event.currentTarget.value})
    }
    else{
      //AllProducts();
      setFiltro(false);
      setFillcom1(false);
      setfilCat(false);
      setFiltecom(false);

      setSearch({...Search,name:""});
      //setFiltro(true);
      
    }
    
   }

  }

  return (
    <div className={style.shopContain}>
      <h1 className={style.titulo}>Pets Shop</h1>
      
      <div className={style.titCat}>
        <h5>Nombre :</h5>
        <input type="text" onChange={handleName} ref={inputRef} />
      </div>
      <div className={style.titCat}>
        <h5>Categorias: </h5>
        <select onChange={handleCat}>
          <option value="0">Seleccion :</option>
           {CateProd.map((e:Product,index:any)=> {
            return <option key={index}>{e.name}</option>
           })}
        </select>
      </div>
      <div className={style.butNew}>
        <button className={style.newProd} onClick={handleModal}>New Product</button>
        <Modal openModal={openModal} cambiarEstado={setOpenModal} CateProd={CateProd}></Modal>
      </div>

      <div className={style.container}>

        {filtro ? <CardsShop products={prodName} firstIndex={firstIndex} lastIndex={lastIndex} /> :
        filCat ? <CardsShop products={ProdCat} firstIndex={firstIndex} lastIndex={lastIndex} />:
        filtecom ? <CardsShop products={FILTROS} firstIndex={firstIndex} lastIndex={lastIndex} />:  
        filtercom1 ? <CardsShop products={FILTROS1} firstIndex={firstIndex} lastIndex={lastIndex} />: 
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
        productsfil1={FILTROS1}
      />
    </div>
  )
}

export default PetShop;