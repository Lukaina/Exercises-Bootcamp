import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {

  static propTypes = {
    indicesito: PropTypes.string.isRequired,
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.shape({ //Shape: forma de objeto en específico. 
      image: PropTypes.string, 
      name: PropTypes.string,
      price: PropTypes.number, 
      desc: PropTypes.string,
      status: PropTypes.string
    }).isRequired
  }

  // componentDidCatch()
  // componentDiMount()
  // componentWillMount()

  handleClick = () => {
    this.props.addToOrder(this.props.indicesito);
  }

  render() { //Render se llama dos veces. Cuando se va inicializar el componente y cuando está inicializado.
    const { image, name, price, desc, status } = this.props.details; //Destructuring objetos. 
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={this.handleClick} //Función que se llama cuando se le hace clic.
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;