import axios from "axios";
import React, { useState } from "react";

const Sample = () => {
    const [ contador, setContador ] = useState(0);
    const [userName, setUserName] = useState('');
    const [posts, setPosts] = useState([]);
    const [ postTile, setPostTile ] = useState('');
    const [ postContent, setPostContent ] = useState('');

    const getPosts = async () => {
        const postsFromAPI = await axios.get('https://backend-posts-test.herokuapp.com/api/post', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyYW5jby5tb3JhbGVzQG91dGxvb2suY29tIiwic3ViIjo0LCJpYXQiOjE2NTgxOTc1ODksImV4cCI6MTY1ODIwMTE4OX0.wKyxRQJcqxVDfbjO_U4EsvYfOc2lX-zuij6bFc46MjM'
            }
        })
        setPosts(postsFromAPI.data);
    };

    const publishPost = async () => {
        await axios.post('https://backend-posts-test.herokuapp.com/api/post', {
            title: postTile,
            content: postContent
        }, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyYW5jby5tb3JhbGVzQG91dGxvb2suY29tIiwic3ViIjo0LCJpYXQiOjE2NTgxOTc1ODksImV4cCI6MTY1ODIwMTE4OX0.wKyxRQJcqxVDfbjO_U4EsvYfOc2lX-zuij6bFc46MjM'
            }
        })
    }

    return (
        <div>
            <h1>Contador!!!</h1>
            <h3>Aqui!!!! para que me vean en tiempo real: {userName}</h3>
            <label>Usuario: </label>
            <input type="text" name="userName" id="userName" onChange={(e) => setUserName(e.target.value)} />
            <p>El valor del contador es: {contador}</p>
            <input type="button" value="+" name="sumar" onClick={() => {
                setContador(contador + 1);
                localStorage.setItem('userName', userName);
                localStorage.setItem('contador', contador);
            }} />
            <input type="button" value="-" name="restar" onClick={() => {
                setContador(contador - 1);
                localStorage.setItem('userName', userName);
                localStorage.setItem('contador', contador);
            }} />
            <hr />
            <input type="button" value="Obtener posts" onClick={ () => {
                getPosts();
            } } />
            <h3>Agregar nuevo post</h3>
            <input type="text" placeholder="Titulo post" onChange={(e) => setPostTile(e.target.value)} />
            <input type="text" placeholder="Contenido post" onChange={(e) => setPostContent(e.target.value)} />
            <input type="button" value="Publicar post" onClick={() => {
                publishPost();
            }} />
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                {posts.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Sample;
