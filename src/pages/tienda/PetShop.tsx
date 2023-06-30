//import React, { useState } from "react";
//import {items} from "../../data/index"
import CardsShop from "../../components/CardsShop/CardsShop";
import style from "./PetShop.module.css"
import Modal from "../../components/Modal/Modal"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProductService } from '../../services/ProductService'
import { getProductos, getProductosxName, getTypesProducts, getProdType, Fill } from "../../redux/actions"
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch } from "react-redux";
//import { Product } from '../../redux/types';

const PetShop: React.FC = () => {
  const numPage = useSelector((state: any) => state.numPage);
  //  const [pagina,setPagina] = useState<number>(numPage);

  const [openModal, setOpenModal] = useState(false);
  const [porPagina] = useState<number>(9);
  const lastIndex = numPage * porPagina //10
  const firstIndex = lastIndex - porPagina
  const [maxPageNumberLimit, setMaxpageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const Fil = useSelector((state: any) => state.Fil);
  let products = useSelector((state: any) => state.products);
  let prodName = useSelector((state: any) => state.productsxName);
  let SearchName = useSelector((state: any) => state.name);
  let TypesProducts = useSelector((state: any) => state.productTypes);

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


  useEffect(() => {
    if (Fil) {
      (async function () {
        const response = await ProductService.getProductsxName(SearchName);
        dispatch(getProductosxName(response.data))
      }
      )();
    }
  }, [Fil])

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.currentTarget.value;
    dispatch(getProdType(selectedOption));
    dispatch(Fill(true));
  }

  const handleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div>
      <h1 className={style.titulo}>Pets Shop</h1>
      <h1 className={style.titCat}>Categoria</h1>
      <aside className={style.cat}>
        <div className={style.containerCat}>
          {TypesProducts.map((e: any, index: number) => <li key={index}>
            <input type="radio" name="grupo" value={e.name} onChange={handleRadioChange} />{e.name}</li>)}
        </div>
      </aside>
      <div className={style.butNew}>
        <button className={style.newProd} onClick={handleModal}>New Product</button>
        <Modal openModal={openModal} cambiarEstado={setOpenModal}></Modal>
      </div>

      <div className={style.container}>

        {Fil ? <CardsShop products={prodName} firstIndex={firstIndex} lastIndex={lastIndex} /> :
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
        Fil={Fil}
      />
    </div>
  )
}

export default PetShop;