import React, {useState} from "react";
import UserList from "../../components/userList/userList";
import style from './AdminView.module.css';

const AdminView: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleShowList = () => {
        setShowList(true);
    };

    return (
        <div className={style.dashContain}>
            <div className={style.sidebar}>
                <div className={style.sidebutton}>
                    <button onClick={handleShowList}>Usuarios</button>
                </div>
                <div className={style.sidebutton}>
                </div>
            </div>
            <div className={style.contenido}>
                <header>
                    <div className={style.titulo}>
                        <h1>Vista de administrador</h1>
                    </div>
                </header>
                {showList && <UserList />}
            </div>
        </div>
    )
}
export default AdminView;