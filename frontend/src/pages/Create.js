import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useBlog } from '../hooks/useBlogContext';


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const { dispatch } = useBlog()
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        //handle to prevent request from form 
        e.preventDefault();
        const respone = await fetch('/blogs/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                body
            })
        });

        const json = await respone.json();
        if(respone.ok){
            alert(
                `Create success blog ${title} to database`
            );
            setTitle('');
            setAuthor('');
            setBody('');
            dispatch({type: 'CREATE_BLOG', payload: {title, author, body}})
            navigate('/')
        }

        if(!respone.ok){
            console.log(json.error); 
        }
    }

    return (
        <>
            <Navbar />
            <div className='create-blog content'>
                <form action='/blogs/create' onSubmit={handleSubmit}>
                    <label for="title">Blog Title: </label>
                    <input type="text" id="title" value={title} onChange={(evt) => {setTitle(evt.target.value)}} required />
                    <label for="snippet">Blog Author</label>
                    <input type="text" id="snippet" value={author} onChange={(evt) => {setAuthor(evt.target.value)}} required />
                    <label for="body">Blog Body</label>
                    <textarea id="body" value={body} onChange={(evt) => {setBody(evt.target.value)}} required></textarea>
                    <button>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Create