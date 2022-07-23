import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Form, Message } from "rsuite";
import { ApiWithToken } from "../../config/api";

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    const newPost = async () => {
        try {
            await ApiWithToken.post(`/api/post`, {
                title,
                content
            });
            navigate('/myposts');
        } catch {
            setMessageError('El proceso de crear un nuevo post no fue realizado.');
        }
    };

    return (
        <>
            <h3>Nuevo post</h3>
            <Form fluid>
                <Form.Group>
                    <Form.ControlLabel>Titulo</Form.ControlLabel>
                    <Form.Control name="title" onChange={(value) => setTitle(value)} />
                </Form.Group>
                <Form.Group>
                    <Form.ControlLabel>Contenido</Form.ControlLabel>
                    <Form.Control name="content" onChange={(value) => setContent(value)} />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                    <Button appearance="primary" onClick={() => newPost()}>Crear post</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
            {messageError && <Message className="forms-error-message" type="error">{messageError}</Message>}
        </>
    );
}

export default NewPost;