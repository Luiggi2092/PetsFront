import style from './paginado.module.css'

const Paginado = () => {

    return (
        <div className={style.container}>
            <button>Previus</button>
            <p className={style.active}>1</p>
            <p className={style.active}>2</p>
            <p className={style.active}>3</p>
            <button>Next</button>
        </div>
    )



}
export default Paginado;
