import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <h1>Můj Blog</h1>
            <nav>
            <Link to='/' >Domů</Link>
            <Link to='/create' >Vytvořit příspěvek</Link>
            <Link to= '/login'>Login</Link>
            </nav>
        </header>
    );
};

export default Header;
