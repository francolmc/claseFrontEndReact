import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, FlexboxGrid, Form, Message, Panel } from "rsuite";
import { ApiWithoutToken } from "../../config/api";

const RegisterUser = () => {
    const [messageError, setMessageError] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const registerUser = async () => {
        try {
            await ApiWithoutToken.post(`/api/user/register`, {
                email,
                firstName,
                lastName,
                password
            });
            navigate('/register/success');
        } catch {
            setMessageError('Error: no fue posible registrar el usuario. Intente con otro correo.')
        }
    }

    return (
        <FlexboxGrid justify="center" className="login-form">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Registro de usuario</h3>} bordered>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" value={email} onChange={(value) => setEmail(value)} />
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
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" value={password} onChange={(value) => setPassword(value)} />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={() => registerUser()}>Registrarme</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
              {messageError && <Message className="login-error-message" type="error">{messageError}</Message>}
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}

export default RegisterUser;