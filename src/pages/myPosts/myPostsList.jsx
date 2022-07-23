import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Panel } from "rsuite";
import { ApiWithToken } from "../../config/api";

const MyPostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
                const data = await ApiWithToken.get(`/api/post/user/${localStorage.getItem('user')}`);
            setPosts(data.data);
        };
        getPosts();
    }, []);
    
    return (
        <>
            <h3>Publicaciones realizadas</h3>
            <p className="new-post-link">
                <Link to="/myposts/new">Nuevo post</Link>
            </p>
            {posts.map(item => (
                <Panel header={item.title} key={item.id} className='post-list' shaded>
                    <p>
                        {item.content}
                    </p>
                    <ButtonGroup size="xs" className="post-button-group">
                        <Link to={`/myposts/${item.id}/edit`} className="post-button-group rs-btn-group rs-btn-group-xs" role="button">Editar</Link>
                    </ButtonGroup>
                </Panel>
            ))}
        </>
    );
}

export default MyPostsList;