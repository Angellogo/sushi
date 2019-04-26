import React, { Component } from 'react';
import styled from 'styled-components';
import LogoSushi from './img/haz_tu_sushi.png'
import BackgroundSushi from './img/background_bienvenido.jpg'

// background: ${props => props.animation === true ? 'red' : 'url(' + BackgroundSushi + ')'};

const BienvenidoStyles = styled.section`
    width:100vw;
    height:100vh;
    background: url(${BackgroundSushi});
    background-size:cover;
    background-position: center;
    color:#fff;
    animation: 1.5s cortina ease-in-out;
   

    @keyframes cortina
    {
        0%{  opacity:0;}
        100%{ opacity:1;}
    }


.logo{
    margin-top: 10vh;
    animation: 2s logo ease-in infinite;}

        @keyframes logo{
            0%{-webkit-transform: scale(1) translateY(0px); opacity:.8;}
            50%{-webkit-transform: scale(1.05) translateY(0px); opacity: 1;}
            100%{-webkit-transform: scale(1) translateY(0px); opacity: .8;}
        }

boton{
    border: solid 2px #fff;
    display:block;
    width:170px;
    height:20px;
    text-align:center;
    padding:10px;
    margin:auto;
    border-radius:5px;
    cursor:pointer;
    -webkit-transition: all .2s ease-in;
}

boton:hover{
    -webkit-transition: all .2s ease-in;
    background:#fff;
    color: #2D353A;
}


`;

class bienvenidoComponent extends Component {

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

    render() {
        return (    
            <BienvenidoStyles animation={this.state.animation}>
                <img src={ LogoSushi } alt='Haz tu sushi' className='logo'/>
                <boton onClick={()=> this.props.clickHandler('Introduccion')}>Comenzar</boton>
            </BienvenidoStyles>
        )    
    }
    
}

export default bienvenidoComponent;



