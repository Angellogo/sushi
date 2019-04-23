import React, { Component, Fragment } from 'react';
import styled from 'styled-components';


const bienvenidoStyles = styled.section`
width:100px;
height:100px;
background:red;
color:red;
`;

const bienvenidoComponent = ({}) => {
    return (
        <Fragment>
            
            <bienvenidoStyles>
                <h1>Hola mundo yeah!</h1>
            </bienvenidoStyles>

        </Fragment>
    )    
}

export default bienvenidoComponent;



