import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonToolbar, Form, Message } from "rsuite";
import { ApiWithToken } from "../../config/api";

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getPostById = async (postId) => {
            const data = await ApiWithToken.get(`/api/post/${postId}`);
            return data.data;
        };
        getPostById(id).then((post) => {
            setTitle(post.title);
            setContent(post.content);
        });
    }, [id]);

    const updatePost = async () => {
        try {
            await ApiWithToken.put(`/api/post/${id}/update`, {
                title,
                content
            });
            navigate('/myposts');
        } catch {
            setMessageError('El proceso de actualizacion no fue realizado.');
        }
    };

    return (
        <>
            <h3>Modificar post</h3>
            <Form fluid>
                <Form.Group>
                    <Form.ControlLabel>Titulo</Form.ControlLabel>
                    <Form.Control name="title" value={title} onChange={(value) => setTitle(value)} />
                </Form.Group>
                <Form.Group>
                    <Form.ControlLabel>Contenido</Form.ControlLabel>
                    <Form.Control name="content" value={content} onChange={(value) => setContent(value)} />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                    <Button appearance="primary" onClick={() => updatePost()}>Guardar post</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
            {messageError && <Message className="forms-error-message" type="error">{messageError}</Message>}
        </>
    );
}

export default EditPost;