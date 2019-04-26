import React from 'react';
import styled from 'styled-components';
import BackgroundChalk from './img/background_chalk.jpg';
import tituloIngredientes from './img/ingredientes.png'

const IngredientesStyle = styled.section`
width:100vw;
    height:100vh;
    background: url(${BackgroundChalk});
    background-size:cover;
    color:#fff;
    justify-content:center;
    align-items:center;

.logoIngredientes{
    margin-top:10vh;
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

`;

const IngredientesComponent = () =>{
    return(
        <IngredientesStyle>
            <img src={ tituloIngredientes } alt='' className='logoIngredientes'/>
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
        </IngredientesStyle>
    )
};

export default IngredientesComponent;