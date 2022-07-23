import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Form, Message } from "rsuite";
import { ApiWithToken } from "../../config/api";

const EditProfile = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            const data = await ApiWithToken.get(`/api/user/${localStorage.getItem('user')}`);
            return data.data;
        };
        getProfile().then((profile) => {
            setEmail(profile.email);
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
        });
    }, []);

    const updateUser = async () => {
        try {
            await ApiWithToken.put(`/api/user/${localStorage.getItem('user')}/update`, {
                firstName,
                lastName
            });
            navigate('/profile');
        } catch {
            setMessageError('El proceso de actualizacion no fue realizado.');
        }
    };

    return (
        <>
            <h3>Modificar perfil de usuario</h3>
            <Form fluid>
                <Form.Group>
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="text" defaultValue={email} key={email} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.ControlLabel>Nombre</Form.ControlLabel>
                    <Form.Control name="firstName" value={firstName} onChange={(value) => setFirstName(value)} />
                </Form.Group>
                <Form.Group>
                    <Form.ControlLabel>Apellidos</Form.ControlLabel>
                    <Form.Control name="lastName" value={lastName} onChange={(value) => setLastName(value)} />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                    <Button appearance="primary" onClick={() => updateUser()}>Guardar perfil</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
            {messageError && <Message className="forms-error-message" type="error">{messageError}</Message>}
        </>
    );
};

export default EditProfile;