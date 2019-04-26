import React from 'react';
import styled from 'styled-components';
import BackgroundChalk from './img/background_chalk.jpg';
import tituloIngredientes from './img/ingredientes.png'
import camaronIzq from './img/camaron-izq.png'
import camaronDer from './img/camaron-der.png'

const IngredientesStyle = styled.section`
    width:100vw;
    height:100vh;
    background: url(${BackgroundChalk});
    background-size:cover;
    color:#fff;
    justify-content:center;
    align-items:center;
    animation: .6s cortinaTres ease-in;
   

    @keyframes cortinaTres
    {
        0%{ -webkit-transform: translateY(200px); opacity:0;}
        100%{ -webkit-transform: translateY(0px); opacity:1;}
    }

.contenedor-textos-listas{
    width:70vw;
    height:100px;
    margin:20px auto;
    display: flex;
}    

.listas{
    list-style:none;
    text-align:left;
    margin:10px 20px;
}

boton{
    border: solid 2px #fff;
    display:block;
    width:170px;
    height:20px;
    text-align:center;
    padding:10px;
    border-radius:5px;
    cursor:pointer;
    margin:auto;
}

boton:hover{
    -webkit-transition: all .2s ease-in;
    background:#fff;
    color: #2D353A;
}

.contIngredientes{
    width:500px;
    height:50vh;
    margin: auto;
    position:relative;
    padding-top:50px;
}

.camaronIzq{
    position:absolute;
    left:0px;
    animation: 1.5s camIzq infinite ease-in-out;
}
    @keyframes camIzq{
        0%{-webkit-transform: rotate(0deg);}
        50%{-webkit-transform: rotate(30deg);}
        100%{-webkit-transform: rotate(0deg);}
    }

.camaronDer{
    position:absolute;
    right:-3px;
    animation: 1.5s camDer infinite ease-in-out;
}
    @keyframes camDer{
        0%{-webkit-transform: rotate(0deg);}
        50%{-webkit-transform: rotate(-30deg);}
        100%{-webkit-transform: rotate(0deg);}
    }

.logoIngredientes{
    position:relative;
}  

`;

const IngredientesComponent = () =>{
    return(
        <IngredientesStyle>
            <div className='contIngredientes'>
                <img src={ camaronIzq } alt='' className='camaronIzq'/>
                <img src={ tituloIngredientes } alt='' className='logoIngredientes'/>
                <img src={ camaronDer } alt='' className='camaronDer'/>
            </div>

            <div className='contenedor-textos-listas'>
                <ul className='listas'>
                    <li>•	1 taza de arroz para sushi</li>
                    <li>•	Agua <small>(doble porción por cada de arroz)</small></li>
                    <li>•	100 gramos de atún fresco</li>
                </ul>

                <ul className='listas'>
                    <li>•	100 gramos de salmón fresco</li>
                    <li>•	½ unidad de Pepino</li>
                    <li>•	3 hojas de Alga nori</li>
                </ul>

                <ul className='listas'>
                    <li>•	1 unidad de aguacate</li>
                    <li>•	100 gramos de queso crema</li>
                    <li>•	Malla para preparar Sushi</li>
                </ul>
            </div>
            <boton onClick={()=> this.props.clickHandler('')}>Siguiente</boton>
        </IngredientesStyle>
    )
};

export default IngredientesComponent;