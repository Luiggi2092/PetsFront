import React, {useState} from "react";
import UserList from "../../components/userList/userList";
import style from './AdminView.module.css'
import AdoptionFormList from "../../components/AdoptionList/adoptionList";

const AdminView: React.FC = () => {
    const [showList, setShowList] = useState(false);
    const [showForms, setShowForms] = useState(false);

    const handleShowList = () => {
        setShowList(true);
        setShowForms(false);
    };

    const handleShowForms = () => {
        setShowForms(true);
        setShowList(false);
    }

    return (
        <div className={style.dashContain}>
            <div className={style.sidebar}>
                <div className={style.sidebutton}>
                    <button onClick={handleShowList}>Usuarios</button>
                </div>
                <div className={style.sidebutton}>
                    <button onClick={handleShowForms}>Formularios de adopción</button>
                </div>
            </div>
            <div className={style.contenido}>
                <header>
                    <div className={style.titulo}>
                        <h1>Vista de administrador</h1>
                    </div>
                </header>
                {showList && <UserList />}
                {showForms && <AdoptionFormList/>}
            </div>
        </div>
    )
}
export default AdminView;