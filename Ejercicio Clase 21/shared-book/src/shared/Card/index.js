import React from 'react';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

import './Card.css';

const Card = ({ imageUrl, author }) => {
    return (
        <div className="card">
            <CardContent imageUrl={imageUrl} />
            <CardFooter author={author} />
        </div>
    );
};

export default Card;