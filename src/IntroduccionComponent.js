import React, { Component } from 'react';
import styled from 'styled-components';
import BackgroundChalk from './img/background_chalk.jpg';
import QueVamosHacer from './img/que_vamos.png';
import Palillo from './img/palillo.png';
import trozoSushi from './img/sushi-trozo.png';


const InstroduccionStyles = styled.section`
width:100vw;
    height:100vh;
    background: url(${BackgroundChalk});
    background-size:cover;
    color:#fff;
    justify-content:center;
    align-items:center;
    

.titulo_vamos{
    margin-top: 7vh;
}    

.Texto-1{ 
    text-align:justify;
    margin:10px 0px;;
    color:#fff;}    

.contentIntroduccion{
    width:200px;
    height:300px;
    margin-right:30px;
}
.contenedorImg{
    width:60vw;
    height:300px;
    margin:auto;
    display:flex;
    
}

.ContenedorTexto{
    width:600px;
    height:300px;
    padding-top:40px;  
}

.boton{
    border: solid 2px #fff;
    display:block;
    width:170px;
    height:20px;
    text-align:center;
    padding:10px;
    margin:auto;
    border-radius:5px;


}

`;

class InstroduccionComponent extends Component {

    constructor() {
        super();

        this.state = {
            animation: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                animation: false
            })
        }, 2000)
    }

    render(){

        return (
            <InstroduccionStyles>
                <img src={ QueVamosHacer } alt='' className='titulo_vamos' />
                <div className='contenedorImg'>
                    <div className='contentIntroduccion'>
                        <img src={ Palillo } className='palilloIzquierdo'/>
                        <img src={ trozoSushi }/>
                        <img src={ Palillo } className='palilloDerecho'/>
                    </div>
    
                    <div className='ContenedorTexto'>
                    <p className='Texto-1'> Hacer un rollo de sushi no es tan complicado como 
                    parece, sin embargo tiene un proceso como cualquier platillo, que puede ser
                    tan fácil o dificil como consideres.
                    </p>
                    <p className='Texto-1'>
                    Esta página te proporcionará las intrucciones básicas para prepararlo,
                    basandonos en la receta de ROLLO CALIFORNIA para una porción de 3 personas.
                    </p>
                    <p className='Texto-1'>
                    Te deseamos suerte en este camino de sabiduría culinaria.
                    </p>
                    <boton className='boton'>Siguiente</boton>
                </div>
    
                </div>
    
                
            </InstroduccionStyles>
        )

    }


    
}


export default InstroduccionComponent;