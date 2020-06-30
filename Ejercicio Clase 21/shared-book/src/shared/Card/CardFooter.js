import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ author }) => {
return <p>Author: {author}</p>;
};

CardFooter.propTypes = {
    author: PropTypes.string,
};

export default CardFooter;