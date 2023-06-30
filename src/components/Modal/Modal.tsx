import style from './modal.module.css';

interface Props {
    openModal: boolean;
    cambiarEstado: (value: boolean) => void;
}

const Modal: React.FC<Props> = ({ openModal, cambiarEstado }) => {
    return (
        <>
            {openModal && <form>
                <div className={style.Overlay}>
                    <div className={style.ContenedorModal}>
                        <div className={style.EncabezadoModal}>
                            <h2>Producto</h2>
                        </div>
                        <div className={style.contendor}>
                            <input type="image"></input>
                            <label>Producto</label>
                            <input type="text"></input>
                            <label>Price :</label>
                            <input type="number"></input>
                            <label>Available</label>
                            <input type="number"></input>
                            <select>
                                <option>Opcion 1</option>
                                <option>Opcion 2</option>
                            </select>

                        </div>
                        <div className={style.BotonCerrar} onClick={() => cambiarEstado(false)}>
                            X
                        </div>

                        <button type="submit">
                            Create Product
                        </button>

                    </div>
                </div>
            </form>}
        </>
    )
}

export default Modal;