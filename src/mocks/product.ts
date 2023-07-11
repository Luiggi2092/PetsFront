export interface IProduct{
    id:number,
    title:string,
    price:number,
    img:string,
    description:string[]
}

export const Product:IProduct = {

    id:1,
    title:"iphone",
    price:420,
    description: ["Modo Cine baja profundidad y cambio de enfoque en tus videos"],
    img:"https://res.cloudinary.com/dpq8kiocc/image/upload/v1689091520/Products/tc0rzg0m7wu93qa3cigk.jpg"

};