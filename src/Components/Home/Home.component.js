import React from 'react';
import {Link} from 'react-router-dom';
import ImgPortada from '../../assets/img/Fondo.jpg'
export default class Home extends React.Component{
    render(){
        return(
            <div className="Home">
              <h1 class="display-4">E-Commerce Vue</h1>
               <p class="lead">Prueba de Vue para cursos de Desarrollo de Webb App con Frameworks</p>
            </div>
        );
    }

}
