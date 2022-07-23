import { useState } from "react";
import { useEffect } from "react";
import { Badge, Button, Panel } from "rsuite";
import { ApiWithToken } from "../../config/api";

const HomePosts = () => {
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        const data = await ApiWithToken.get('/api/post/all/with-count-likes');
        setPosts(data.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const likePost = async (postId) => {
        await ApiWithToken.put(`/api/like/post/${postId}/like`);
        await getPosts();
    }

    return (
        <>
            <h3>Publicaciones realizadas</h3>
            {posts.map(item => (
                <Panel header={item.title} key={item.id} className='post-list' shaded>
                    <p>
                        {item.content}
                    </p>
                    <div className="likes-post">
                        <Badge content={item.countLikes || 0}>
                            <Button onClick={() => likePost(item.id)}>Like</Button>
                        </Badge>
                    </div>
                </Panel>
            ))}
        </>
    );
}

export default HomePosts;