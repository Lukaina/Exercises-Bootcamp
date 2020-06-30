import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Shared components
import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';
import Card from '../../shared/Card';

import './List.css';

const List = ({ shareBooks }) => {
    return(
        <div className="App">
            <Header title="ShareBook" />
            <Link to="/create">
            <FloatingIcon icon="+" />
            </Link>
            <Container>
                <div className="share-book-list">
                 {shareBooks.length &&
                    shareBooks.map((book) => (
                        <Card 
                        hey={book.author}
                        imageUrl={book.imageUrl} 
                        author={book.author}
                        />
                    ))}
                </div>
            </Container>
        </div>

    );
};

List.propTypes = {
    ShareBooks: PropTypes.array,
};

export default List;