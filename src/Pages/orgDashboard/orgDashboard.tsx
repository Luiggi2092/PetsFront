import React, { useState } from "react";
import UserList from "../../components/userList/userList";
import AdoptionsList from '../../components/AdoptionsList/AdoptionsList'
import style from './dashboard.module.css'

const OrgDashboard: React.FC = () => {
    const [showList, setShowList] = useState(false);

    const handleShowList = () => {
        setShowList(true);
    };

    return (
        <div className={style.dashContain}>
            <div className={style.titulo}>
                <h1>Organización Dashboard</h1>
            </div>
            <div className={style.sidebar}>
                <div className={style.sidebutton}>
                    <button onClick={handleShowList}>Usuarios</button>
                </div>
                <div className={style.sidebutton}>
                    <button>Mascotas</button>
                </div>
            </div>
            <div className={style.content}>
                {showList && <UserList />}
            </div>
            <div>
                <AdoptionsList/>
            </div>
        </div>
    )
};

export default OrgDashboard;