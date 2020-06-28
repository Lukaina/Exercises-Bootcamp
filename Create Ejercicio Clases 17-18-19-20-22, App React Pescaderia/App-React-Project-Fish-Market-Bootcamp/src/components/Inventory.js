import React from 'react';
import PropTypes from 'prop-types';
import FishForm from './FishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    static propTypes = {
        addFishToState: PropTypes.func.isRequired,
        loadSampleFishesToState: PropTypes.func.isRequired,
        fishes: PropTypes.object.isRequired,
        updateFish: PropTypes.func.isRequired,
        deleteFish: PropTypes.func.isRequired,
    }

    /*state = {
    count: 0
    }
    También:
    constructor(props) {
        super(props);

        state = {

        };
    }

    addToCount() {
        event.preventDefault();
        this.setState({ count: this.state.count + 1 });
        //
        this.setState((state) => { return {count: state.count + 1 } }); //Asíncrono, no se ejecuta de inmediato.
        this.setState((state) => { return {count: state.count + 1 } });
        this.setState((state) => { return {count: state.count + 1 } });
        
    }*/

    render() {
        return (
            <div className="inventory">
                <span className="inventory__title">
                    <h1>¡Inventory!</h1>
                    <h2>Lista de platos</h2>
                    {Object.keys(this.props.fishes).map((key) => {
                        return <EditFishForm deleteFish={this.props.deleteFish}
                        updateFish={this.props.updateFish}
                        key={key}
                        index={key}
                        fish={this.props.fishes[key]}
                        />
                    })}
                    <h2>¡Crear nuevo plato!</h2>
                    {/* <p>Aquí va nuestro inventario.</p> */}
                    <FishForm 
                        addFishToState={this.props.addFishToState}
                        loadSampleFishesToState={this.props.loadSampleFishesToState}
                    />
                </span>
            </div>
          
        );
    }
}

export default Inventory;