import { useState } from 'react';

const UserInfo = () => {
    const [user, setUser] = useState();
    const [contador, setContador] = useState();

    const updateLocalStorage = () => {
        setUser(localStorage.getItem('userName'));
        setContador(localStorage.getItem('contador'));
    }

    return (
        <div>
            El nombre del usuario es {user} y cuenta {contador}. <input type="button" value="actualizat locastorage" onClick={() => updateLocalStorage()} />
        </div>
    );
};

export default UserInfo