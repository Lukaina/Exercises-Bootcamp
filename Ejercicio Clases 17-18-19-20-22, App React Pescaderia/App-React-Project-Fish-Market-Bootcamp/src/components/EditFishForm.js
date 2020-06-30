import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

    static propTypes = {
      deleteFish: PropTypes.func.isRequired,
      updateFish: PropTypes.func.isRequired,
      index: PropTypes.string.isRequired,
      fish: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
      }).isRequired,
    };

    handleChange = (event) => {
      //console.log(event.currentTarget.value);
      const updateFish = {
        ...this.props.fish,
        [event.currentTarget.name]: event.currentTarget.value
      };
      this.props.updateFish(this.props.index, updateFish);
    }

    //Botón
    // handleClick = () => {
    //   this.props.deleteFish(this.props.index)
    // }

    render() {
        return <div clasName="fish-edit">
          <input name="name"
            onChange={this.handleChange}
            //onClick={this.handleClick}
            value={this.props.fish.name}
            type="text"
            placeholder="Name"
          />
          <input
            name="price"
            onChange={this.handleChange}
            value={this.props.fish.price}
            type="text"
            placeholder="Price"
          />
          <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>

          <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} placeholder="Desc" />
          <input
            name="image"
            onChange={this.handleChange}
            value={this.props.fish.image}
            type="text"
            placeholder="Image"
          />
          <button onClick={() => {
            this.props.deleteFish(this.props.index)
          }}>Eliminar este plato</button>
        </div>;
    }
}

export default EditFishForm;