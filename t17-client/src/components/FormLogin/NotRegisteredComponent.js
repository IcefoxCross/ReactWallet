import React from 'react';
import { Link } from 'react-router-dom';

const NotRegisteredComponent = () => {
    return (
        <div>
            <p>Sin cuenta? Puedes crear una <Link to="/register">aquí.</Link></p>
        </div>
    )
};

export default NotRegisteredComponent;