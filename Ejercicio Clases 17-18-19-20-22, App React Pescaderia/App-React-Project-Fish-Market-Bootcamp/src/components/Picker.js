//1. Importar dependencias de React.
import React from 'react';
import { getFunName } from "../helpers";

//2. Crear el componente como una clase.
class Picker extends React.Component {
    myInput = React.createRef();
    /*constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }*/

    goToStore = event => {
        //1. Parar la recarga.
        event.preventDefault();
        //console.log("Vamos a la tienda");

        //2. Obtener el valor del input
        const storeName = this.myInput.current.value;
        //console.log(storeName);

        //3. Redireccionar usando el valor del input
        this.props.history.push(`/store/${storeName}`);

        //console.log(event.target[0].value);
    };

    //3. Agregar el método render.
    render() {
        //4. Retornar el componente. 
        //return <p>¡Hola! 😊</p>
        //return React.createElement('p', { className: '⭐'}, 'start' React.createElement(...));
        return (
        //<React.Fragment>
            //<p>Title</p>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a shop</h2>
                <input 
                    type="text"
                    required 
                    placeholder="Name shop"
                    defaultValue={getFunName()}
                    ref={this.myInput}
                />
                <button type="submit">¡Go! <span role="img">👉</span></button>
            </form>
        //</React.Fragment>
        );
    }
}
//5. Exportar el componente.
export default Picker;