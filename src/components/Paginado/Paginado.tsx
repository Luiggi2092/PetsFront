import style from './paginado.module.css'
import { useState} from "react"
import { useDispatch } from 'react-redux';
import {SetPagina} from "../../redux/actions"  


interface Props {
   pagina:number;
   maxPageNumberLimit:number;
   setMaxpageNumberLimit: (value:number) => void;
   minPageNumberLimit:number;
   setMinPageNumberLimit: (value:number)=> void; 
   porPagina:number;
   Fil:boolean;
   FillCat:boolean;
   filtecom:boolean;
   filtecom1:boolean;
   products : [],
   productFill:[],
   productsCat: [],
   productsfil:[],
   productsfil1:[],


}

const Paginado: React.FC<Props> = ({pagina,
                                    maxPageNumberLimit,
                                    setMaxpageNumberLimit,
                                    minPageNumberLimit,
                                    setMinPageNumberLimit,
                                    porPagina,
                                    Fil,
                                    FillCat,
                                    filtecom,
                                    filtecom1,
                                    products,
                                    productFill,
                                    productsCat,
                                    productsfil,
                                    productsfil1
                                    }) => {
    

const [pageNumberLimit] = useState(5);
const dispatch = useDispatch();

let pageNumbers=[];
      



console.log(Math.ceil(products.length/porPagina));


if(Fil){
    for(let i=1;i<=Math.ceil(productFill.length/porPagina);i++){
        pageNumbers.push(i);
    }}
else if (FillCat){
    for(let i=1;i<=Math.ceil(productsCat.length/porPagina);i++){
        pageNumbers.push(i);
    }

}else if (filtecom){
    for(let i=1;i<=Math.ceil(productsfil.length/porPagina);i++){
        pageNumbers.push(i);
    }

}else if(filtecom1){
    for(let i=1;i<=Math.ceil(productsfil1.length/porPagina);i++){
        pageNumbers.push(i);
    }

}

else{
    for(let i=1;i<=Math.ceil(products.length/porPagina);i++){
        pageNumbers.push(i);
    }
    
}

console.log(Math.ceil(products.length/porPagina))
console.log(Math.ceil(productFill.length/9));
console.log(pageNumbers.length);
console.log(pageNumbers)
console.log("cuanto es"  + pagina)



const RendersPageItems = pageNumbers.map((number)=>{
          
    if(number < maxPageNumberLimit + 1 && number>minPageNumberLimit){        
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
