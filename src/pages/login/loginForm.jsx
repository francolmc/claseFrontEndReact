import { useState } from "react";
import { Button, ButtonToolbar, FlexboxGrid, Form, Panel } from "rsuite";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log(userName, password);
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
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}

export default LoginForm;