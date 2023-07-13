import React, { useState } from "react";
import AdoptionFormList from "../../components/AdoptionList/adoptionList";
import style from './dashboard.module.css'

const OrgDashboard: React.FC = () => {
    const [showForms, setShowForms] = useState(false);

    const handleShowForms = () => {
        console.log('muestra formularios')
        setShowForms(true);
    }

    return (
        <div className={style.dashContain}>
            <div className={style.sidebar}>
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
                {showForms && <AdoptionFormList />}
            </div>
        </div>
    )
};

export default OrgDashboard;