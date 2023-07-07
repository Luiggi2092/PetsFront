import style from './paginado.module.css'
import { useState} from "react"
import { useDispatch } from 'react-redux';
import {SetPagina} from "../../redux/actions"  
import React from 'react';


interface Props {
   pagina:number;
   maxPageNumberLimit:number;
   setMaxpageNumberLimit: (value:number) => void;
   minPageNumberLimit:number;
   setMinPageNumberLimit: (value:number)=> void; 
   porPagina:number;
   products : [],
   

}

const Paginado: React.FC<Props> = ({pagina,
                                    maxPageNumberLimit,
                                    setMaxpageNumberLimit,
                                    minPageNumberLimit,
                                    setMinPageNumberLimit,
                                    porPagina,
                                    products,
                                    }) => {
    

const [pageNumberLimit] = useState(5);
const dispatch = useDispatch();

let pageNumbers:any=[];
      





    for(let i=1;i<=Math.ceil(products.length/porPagina);i++){
        pageNumbers.push(i);
}



const RendersPageItems = pageNumbers.map((number:number)=>{
       
    if(number < maxPageNumberLimit + 1 && number>minPageNumberLimit ||
        number < maxPageNumberLimit + 1 && number< minPageNumberLimit){ 
        console.log(number);       
     return (
            <li key={number}  onClick={()=>dispatch(SetPagina(number))} className={pagina == number ? style.active: "null"}>
            {number} 
            
            </li>
         )
       }

 })
   
    const nextPage =()=> {
        if(pagina<pageNumbers.length){
            dispatch(SetPagina(pagina + 1));
        

       if(pagina + 1 > maxPageNumberLimit ){
              setMaxpageNumberLimit(maxPageNumberLimit + pageNumberLimit);
              setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
       }
    }

    }
    
    const previusPage =()=> {
        if(pagina > 1){
            dispatch(SetPagina(pagina -1));

            if((pagina - 1)%pageNumberLimit===0){
                setMaxpageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
         }
        }
    }
 
    return (
        <div className={style.container}>
            <button disabled={pagina === 1 || pagina < 1 } onClick={previusPage}>Previus</button>
            {RendersPageItems}
            <button  onClick={nextPage}>Next</button>
        </div>
    )



}
export default Paginado;
