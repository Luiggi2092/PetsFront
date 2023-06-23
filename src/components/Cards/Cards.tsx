import Card from '../Card/Card';
import style from './Cards.module.css'

const items = [
        
    { id: 1, nombre: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000' },
    { id: 2, nombre: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000' },
    { id: 3, nombre: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000' },  
    { id: 4, nombre: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000' },
    { id: 5, nombre: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000' },
    { id: 6, nombre: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000' },  
    { id: 7, nombre: 'Mesa PetMascota', imagen: 'https://promart.vteximg.com.br/arquivos/ids/645043-1000-1000/image-17a2f3c48c2240fc90c9c7ef96fcd7db.jpg?v=637443430504530000' },
    { id: 8, nombre: 'Cortadora Pet', imagen: 'https://promart.vteximg.com.br/arquivos/ids/5979937-1000-1000/image-b90f723df6f845a2ba4daf6e9a727dad.jpg?v=637931841477370000' },
    { id: 9, nombre: 'Pack Juguete', imagen: 'https://promart.vteximg.com.br/arquivos/ids/2567338-1000-1000/image-60691779b8da48db800809b00c9c63b0.jpg?v=637705364409200000' },  

]



const Cards =()=> {
   
    return (
        <div className={style.container}>
            {items.map((item,index) =>(
               <Card key={index} {...item}/>
            ))}
        </div>
    )
   
}



export default Cards;