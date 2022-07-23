import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, FlexboxGrid, Form, Message, Panel } from "rsuite";
import { ApiWithoutToken } from "../../config/api";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        await ApiWithoutToken.post('/api/user/login', {
          "email": userName,
          "password": password
        }).then((response) => {
          if (response.data) {
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('user', userName);
            navigate('/');
          } else {
            setMessageError('User or password incorrect.');
          }
        }).catch((ex) => {
          if (ex.code === 'ERR_BAD_REQUEST') {
            setMessageError('User or password incorrect.');
          } else {
            setMessageError('Error with server.');
          }
        });
    }

    return (
        <FlexboxGrid justify="center" className="login-form">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control name="name" onChange={(value) => setUserName(value)} />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" onChange={(value) => setPassword(value)} />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={() => login()}>Sign in</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
              {messageError && <Message className="login-error-message" type="error">{messageError}</Message>}
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}

export default LoginForm;