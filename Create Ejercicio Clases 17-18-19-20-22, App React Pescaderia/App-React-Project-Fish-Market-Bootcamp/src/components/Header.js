import React from 'react';
import PropTypes from 'prop-types';
import Image from './ImagesHeader/Restaurant.jpg';

//Componentes Stateless
const Header = (props) => (
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
                <img className="imageRestaurant" src={Image} alt="Image Restaurant" />
        </header>
);

/*class Header extends React.Component {
    render() {
        return (
           
        );
    }
}*/

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;