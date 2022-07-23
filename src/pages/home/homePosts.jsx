import { useState } from "react";
import { useEffect } from "react";
import { Panel } from "rsuite";
import { ApiWithToken } from "../../config/api";

const HomePosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
                const data = await ApiWithToken.get('/api/post');
            setPosts(data.data);
        };
        getPosts();
    }, []);
    return (
        <>
            <h3>Publicaciones realizadas</h3>
            {posts.map(item => (
                <Panel header={item.title} key={item.id} className='post-list' shaded>
                    {item.content}
                </Panel>
            ))}
        </>
    );
}

export default HomePosts;