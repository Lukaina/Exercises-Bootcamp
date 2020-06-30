import React from 'react';
import { Link } from 'react-router-dom';
import './Create.css';
//Shared components
import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autor: '',
            imageUrl: '',
        };
    }

    handleOnUpdateField = (value, field) => {
        this.setState({
            [field]: value,
        });
    };

    handleOnSave = () => {
        this.props.onCreate(this.state);
    }

    render () {
        return (
        <div>
            <Header title="ShareBook" />
            <Link to="/">
            <FloatingIcon icon="x" />
            </Link>
            <Container>
                <div className="form">
                    <h2>Create a new book</h2>
                    <input 
                        placeholder="Add the author of the book" 
                        onChange={(event) => {
                            this.handleOnUpdateField(event.target.value, 'author');
                    }}
                    />
                    <input 
                        placeholder="Add the image url of the book" 
                        onChange={(event) => {
                            this.handleOnUpdateField(event.target.value, 'imageUrl');
                    }}
                    />
                    <Link to="/">
                        <button onClick={this.handleOnSave}>Create</button>
                    </Link>
                </div>
            </Container>
        </div>
        );
    }
}

export default Create;