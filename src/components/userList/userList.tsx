import { useEffect } from "react";
import { fetchUsers, deleteUser, suspendUser } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";

const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.users);

    useEffect(() => {
        dispatch(fetchUsers(users));
    }, [dispatch, users]);

    const handleDeleteUser = (userId: string) => {
        dispatch(deleteUser(userId))
    };

    const handleSuspendUser = (userId: string) => {
        dispatch(suspendUser(userId))
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                        <button onClick={() => handleSuspendUser(user.id)}>Suspender</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;