import { Link } from "react-router-dom";

const SuccessRegister = () => {
    return (
        <>
            <h3>Registro de usuario exitoso</h3>
            <p>
                Su regisgtro se ha realizado con exio. Para ingresar al sistema dirigate a la ventana de <Link to='/login'>login</Link>.
            </p>
        </>
    );
}

export default SuccessRegister;