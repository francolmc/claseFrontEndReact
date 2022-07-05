import React, { useState } from "react";

const Sample = () => {
    const [ contador, setContador ] = useState(0);
    const [userName, setUserName] = useState('');

    return (
        <div>
            <h1>Contador!!!</h1>
            <h3>Aqui!!!! para que me vean en tiempo real: {userName}</h3>
            <label>Usuario: </label>
            <input type="text" name="userName" id="userName" onChange={(e) => setUserName(e.target.value)} />
            <p>El valor del contador es: {contador}</p>
            <input type="button" value="+" name="sumar" onClick={() => {
                setContador(contador + 1);
                localStorage.setItem('userName', userName);
                localStorage.setItem('contador', contador);
            }} />
            <input type="button" value="-" name="restar" onClick={() => {
                setContador(contador - 1);
                localStorage.setItem('userName', userName);
                localStorage.setItem('contador', contador);
            }} />
        </div>
    );
};

export default Sample;