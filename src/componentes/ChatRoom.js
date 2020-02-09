import React, { Component } from "react";

class ChatRoom extends Component{

    constructor(){
        super(); //Para heredar toda la funcionalidad de React
        this.actualizarMensaje = this.actualizarMensaje.bind(this); //De esta forma indicamos que el evento actualizarMensaje puede ser usado dentro de la clase sin perder el scope del this
        this.enviarMensaje = this.enviarMensaje.bind(this);
        this.state = { //Los componentes de React tienen un estado
            mensaje: '',
            mensajes: []
        }
    }

    componentDidMount(){ // Este evento se lanza cuando el componente de React se ejecuta

        firebase.database().ref('mensajes/').on('value', snapshot => {
            const mensajesActuales = snapshot.val();
            if(mensajesActuales != null){
                this.setState({
                    mensajes: mensajesActuales
                })
            }
        })
    }

    actualizarMensaje(e){ //OJO esto es un evento en vez de una función
        this.setState({
            mensaje: e.target.value
        })
    }

    enviarMensaje(){
        const mensaje = {
            id: this.state.mensajes.length,
            text: this.state.mensaje
        }

        firebase.database().ref('mensajes/' + mensaje.id).set(mensaje);

        this.setState({mensaje: ''});
    }

    render(){

        const mensajeActual = this.state.mensajes.map((mensaje, i) => {
            return (
            <li key={mensaje.id} className="list-group-item list-group-item-action">{mensaje.text}</li>
            )
        })

        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {mensajeActual}
                    </ul>
                </div>
                <div className="card-footer">
                    <input type="text" className="form-control" placeholder="Escribe tu mensaje" onChange={this.actualizarMensaje} value={this.state.mensaje} />
                    <button className="btn btn-primary btn-block" onClick={this.enviarMensaje}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default ChatRoom; //Exportamos el modulo para poder usarlo en otro componente