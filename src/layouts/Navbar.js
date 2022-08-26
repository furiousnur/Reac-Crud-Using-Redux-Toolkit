import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
            </nav>
            <nav>
                <Link to="/show-books" className="nav-link">Show Books</Link>
            </nav>
            <nav>
                <Link to="/add-book" className="nav-link">Add Book</Link>
            </nav>
        </>
    );
};

export default Navbar;
