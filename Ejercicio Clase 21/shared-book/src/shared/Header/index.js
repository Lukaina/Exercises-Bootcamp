import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ title }) => {
    return(
        <div className="header">
            <h1>{title}</h1>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string, 
};

export default Header;