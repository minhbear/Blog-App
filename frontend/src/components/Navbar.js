import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to='/'><h1>Blog Application</h1></Link>
            </div>
            <ul>
                <li><Link to='/'>Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/create">New Blogs</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar