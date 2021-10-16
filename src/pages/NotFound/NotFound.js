import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../images/404/404.png'

const NotFound = () => {
    return (
        <div>
            <img src={img} alt="" /><br />
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;