import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonToolbar, Form } from "rsuite";
import { ApiWithToken } from "../../config/api";

const ShowProfile = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        const getProfile = async () => {
            const data = await ApiWithToken(`/api/user/${localStorage.getItem('user')}`);
            return data.data;
        };
        getProfile().then((profile) => {
            setEmail(profile.email);
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
        });
    }, []);

    return (
        <>
            <h3>Perfil de usuario</h3>
            <Form fluid>
                <Form.Group>
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="text" defaultValue={email} key={email} disabled/>
                </Form.Group>
                <Form.Group>
                    <Form.ControlLabel>Nombre</Form.ControlLabel>
                    <Form.Control name="firstName" defaultValue={firstName} key={firstName} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.ControlLabel>Apellidos</Form.ControlLabel>
                    <Form.Control name="lastName" defaultValue={lastName} key={lastName} disabled />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                    <Link to="/profile/edit" className="rs-btn rs-btn-primary" role="button">Editar perfil</Link>
                    <Link to="/profile/change-password" className="rs-btn rs-btn-ghost" role="button">Cambiar password</Link>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </>
    );
};

export default ShowProfile;