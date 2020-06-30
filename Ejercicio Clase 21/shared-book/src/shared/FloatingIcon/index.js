import React from 'react';
import PropType from 'prop-types';

import './FloatingIcon.css';

const FloatingIcon = ({ icon }) => {
    return (
        <div className="floating-icon">
            <span>{icon}</span>
        </div>
    );
};

FloatingIcon.propTypes = {
    icon: PropType.string,
};

export default FloatingIcon;