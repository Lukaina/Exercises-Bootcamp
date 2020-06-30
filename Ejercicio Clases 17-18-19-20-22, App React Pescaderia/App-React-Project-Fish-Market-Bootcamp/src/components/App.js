import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';

class App extends React.Component {

    state = {
        fishes: {}, //En un objeto no se repiten los keys. 
        order: {}
    }

    //CICLO VIDA COMPONENTES
    componentDidMount() { //Se ejecuta cuando el componente ya está listo.
        //console.log(this.props)
        const localStorageOrder = JSON.parse(localStorage.getItem(this.props.match.params.storeId)); //Url página.
        if (localStorageOrder) {
            this.setState({ order: localStorageOrder });
        }
    }

    componentDidUpdate() { //Si algo cambia en mi componente, ejecutar el código que le coloqué acá.
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    /*addFishToState(fishData) {
        let currentFishes = this.state.fishes;
        currentFishes[fishData.key] = fishData.info;
        this.setState({ fishes: currentFishes });
    }*/
    
    addFishToState = fish => {
    // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
        this.setState({ fishes });
    };

    addToOrder = (fish) => {
        const order = { ...this.state.order };
        if (order[fish]) {
            order[fish] = order[fish] + 1;
        } else {
            order[fish] = 1;
        }
        this.setState({ order }); //setState recibe dos parametros. 1) Cambios sobre el estado. 2) Función que se ejecuta cuando ya está listo el estado. 

         //Puede ser reemplazado por estas líneas:
        //order[fish] = order[fish] + 1 || 1;
        //order[fish] = (order[fish]) ? order[fish] + 1 : 1; //Ternario
    }

    loadSampleFishesToState = fishes => {
        this.setState({ fishes: fishes });
    }

    updateFish = (key, updateFish) => {
        //1. Crear una copia del estado.
        const fishesCopy = {...this.state.fishes};
        //2. Actualizar el pescado en la copia del estado.
        fishesCopy[key] = updateFish;
        //3. Actualizar el pescado a partir de la copia.
        this.setState({ fishes: fishesCopy });
    }

    deleteFish = (key) => {
        //1. Crear una copia del estado.
        const fishesCopy = {...this.state.fishes};
        //2. Borrar el pescado.
        delete fishesCopy[key];
        //3. Actualizar el pescado a partir de la copia.
        this.setState({ fishes: fishesCopy })
    }

    render() {
        const { fishes } = this.state; //Traer una key que se llame fishes y que triga sus objetos.
        return (
            <div className="catch-of-the-day">
                <div className="Menu">
                    <Header tagline="¡Fresh Seafood Market!"/>
                    {/* tel={1234} abierto{true} */}
                    <ul>
                        {Object.keys(fishes).map(key =>
                            <Fish 
                            details={fishes[key]}
                            key={key} 
                            addToOrder={this.addToOrder}
                            indicesito={key} //Valor key que no se repite.
                            /> 
                        )}
                    </ul>
                </div>
                <Inventory
                    addFishToState={this.addFishToState}
                    loadSampleFishesToState={this.loadSampleFishesToState}
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                />
                <Order fishes={fishes} order={this.state.order} /> 
            </div>
        );
    }
}

export default App;