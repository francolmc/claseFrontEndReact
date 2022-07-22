import { useParams } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams();
    return (
        <>
            Formulario para editar post {id}
        </>
    );
}

export default EditPost;