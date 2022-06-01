import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='App'>
            <h3>Error !!! Page not found</h3>
            <h1>404</h1>
            <Link to="/"> 
            <FontAwesomeIcon icon={faArrowLeft} />
             Back to Home</Link>

        </div>
    );
};

export default NotFound;