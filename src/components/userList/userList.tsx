import React, {useEffect, useState} from "react";
import axios from "axios";
import style from './userList.module.css'


interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    isSuspended: boolean;
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

    const handleSuspendUser = async (userId: string) => {
        try {
            await axios.put(`/user/${userId}/suspend`);
            const updatedUsers = users.map((user) =>
            user.id === userId ? {...user, isSuspended: true} : user
            );
            setUsers(updatedUsers);
            alert('Usuario suspendido exitosamente.')
        } catch (error) {
            console.error(error)
        }
    }

    const handleUnsuspendUser = async (userId: string) => {
        try {
            await axios.put(`/user/${userId}/unsuspend`);
            const updatedUsers = users.map((user) =>
            user.id === userId ? {...user, isSuspended: false} : user
            );
            setUsers(updatedUsers);
            alert('Suspensión del usuario eliminada.')
        } catch (error) {
            console.error(error)
        }
    }

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
            <h2>Lista de usuarios</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.isSuspended ? '🔴' : '🟢'}</td>
                            <td>
                                {user.isSuspended ? (
                                    <button onClick={() => handleUnsuspendUser(user.id)}>
                                        Quitar suspensión
                                    </button>
                                ) : (
                                    <button onClick={() => handleSuspendUser(user.id)}>
                                        Suspender
                                    </button>
                                )}
                            </td>
                            <td><button onClick={() => handleDeleteUser(user.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;