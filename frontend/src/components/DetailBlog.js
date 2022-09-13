import React, { useEffect, useState } from 'react';
import { useBlog } from '../hooks/useBlogContext';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


const DetailBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const { dispatch } = useBlog();

    useEffect(() => {
        const fetchDetail = async () => {
            const respone = await fetch(`/blogs/${id}`);
            const json = await respone.json();
            if (respone.ok) {
                setBlog(json)
            }
            if (!respone.ok) {
                setBlog(null);
            }
        }

        fetchDetail()
    }, [setBlog]);

    const handleDelete = async () => {
        const respone = await fetch(`/blogs/${blog._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await respone.json();
        if(respone.ok){
            dispatch({type: 'DELETE_BLOG', payload: {id: json._id}});
            setBlog(null)
            alert(`Delete success blog ${json.title}`);
            navigate('/')
        }
    }

    return (
        <>
            <Navbar />
            <div className='details content'>
                {
                    blog ? <>
                        <h2>{blog.title}</h2>
                        <p style={{ "marginTop": "5px" }}>{blog.author}</p>
                        <div className="content" style={{ "marginTop": "10px" }}>
                            <p>{blog.body}</p>
                        </div>
                        <a className='delete' onClick={handleDelete}>
                            <img src="/trash.png" alt="delete" />
                        </a>
                    </> : <h2>Waiting ... :{'>>'} </h2>
                }

            </div>
            <Footer />
        </>
    )
}

export default DetailBlog