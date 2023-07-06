import CardShop from '../CardShop/CardShop';
import style from './cards.module.css'
import { Product } from '../../interfaces/Products';

interface Props {
    products: Product[];
    firstIndex: number;
    lastIndex: number;
}



const Cards: React.FC<Props> = ({ products, firstIndex, lastIndex }) => {

    console.log(products);

    return (
        <div className={style.container}>
            {products.map((products: Product) => (
                <CardShop key={products.id} {...products} />
            )).slice(firstIndex, lastIndex)}
        </div>
    )
}

export default Cards