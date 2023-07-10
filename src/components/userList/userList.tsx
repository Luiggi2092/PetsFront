import React, {useEffect, useState} from "react";
import axios from "axios";
import style from './userList.module.css'

interface User {
    id: string;
    name: string;
    email: string;
    address: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('/user');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId: string) => {
        try {
            await axios.delete(`/user/${userId}`);
            const updatedUsers = users.filter((user)=>user.id !== userId);
            setUsers(updatedUsers);
            alert('Usuario eliminado exitosamente.')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={style.listContain}>
            <h3>Lista de usuarios</h3>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Suspender</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td><button>suspender</button></td>
                            <td><button onClick={() => handleDeleteUser(user.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;