import React from 'react';
import {Link} from 'react-router-dom';
import ImgPortada from '../../assets/img/Fondo.jpg'
export default class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <img className="Imagen" src={ImgPortada} alt="Portada"></img>
                <Link to="/">
                    <h1 className="title">Inicio</h1>
                </Link>
                <Link to="/products">
                    <h1 className="title">Productos</h1>
                </Link>
                
            </div>
        );
    }

}