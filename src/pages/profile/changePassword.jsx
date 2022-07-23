import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Form, Message } from "rsuite";
import { ApiWithToken } from "../../config/api";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    const changePassword = async () => {
        try {
            await ApiWithToken.put(`/api/user/changepassword`, {
                newPassword
            });
            navigate('/profile');
        } catch {
            setMessageError('El proceso de actualizacion no fue realizado.');
        }
    };

    return (
        <>
            <h3>Modificar password usuario</h3>
            <Form fluid>
                <Form.Group>
                    <Form.ControlLabel>Nueva password</Form.ControlLabel>
                    <Form.Control name="new-password" type="password" onChange={(value) => setNewPassword(value)} />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                    <Button appearance="primary" onClick={() => changePassword()}>Guardar perfil</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
            {messageError && <Message className="forms-error-message" type="error">{messageError}</Message>}
        </>
    );
};

export default ChangePassword;