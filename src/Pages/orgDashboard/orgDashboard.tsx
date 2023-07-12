import React, { useState } from "react";
import UserList from "../../components/userList/userList";
import AdoptionFormList from "../../components/AdoptionList/adoptionList";
import style from './dashboard.module.css'

const OrgDashboard: React.FC = () => {
    const [showList, setShowList] = useState(false);
    const [showForms, setShowForms] = useState(false);

    const handleShowList = () => {
        setShowList(true);
        setShowForms(false);
    };

    const handleShowForms = () => {
        console.log('muestra formularios')
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
                    <button onClick={handleShowForms}>Solicitudes de adopcion</button>
                </div>
            </div>
            <div className={style.contenido}>
                <header>
                    <div className={style.titulo}>
                        <h1>Organización Dashboard</h1>
                    </div>
                </header>
                {showList && <UserList />}
                {showForms && <AdoptionFormList />}
            </div>
        </div>
    )
};

export default OrgDashboard;