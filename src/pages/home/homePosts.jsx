import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Panel } from "rsuite";

const HomePosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
                const data = await axios.get('https://backend-posts-test.herokuapp.com/api/post', {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyYW5jby5tb3JhbGVzQG91dGxvb2suY29tIiwic3ViIjo0LCJpYXQiOjE2NTgzNzc3NzAsImV4cCI6MTY1ODM4MTM3MH0.oetUwOFh8EAW5dSGzviKjuHNnP0DH0M3Q4n2SVrawDU"
                }
            });
            setPosts(data.data);
        };
        getPosts();
    }, []);
    return (
        <>
            {posts.map(item => (
                <Panel header={item.title} key={item.id}>
                    {item.content}
                </Panel>
            ))}
        </>
    );
}

export default HomePosts;