/* Componente principal de React */

import React, { Component } from "react";
import ReactDOM from "react-dom";

/* Podemos importar el método "render" directamente desde react-dom
 * y así no usar ReactDom.render() sino directamente render().
 * Sería -> import { render } from "react-dom"
 */

import  ChatRoom  from "./componentes/ChatRoom";

class App extends Component{
    
    render(){
        return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <a href="" className="navbar-brand text-white">React Firebase Chat</a>
            </nav>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <ChatRoom/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)