import React, { Component } from 'react';
import styled from 'styled-components';
import LogoSushi from './img/haz_tu_sushi.png'
import BackgroundSushi from './img/background_bienvenido.jpg'


const BienvenidoStyles = styled.section`
    width:100vw;
    height:100vh;
    background: ${props => props.animation === true ? 'red' : 'url(' + BackgroundSushi + ')'};
    background-size:cover;
    color:#fff;
    
    

.logo{
    margin-top: 10vh;}

boton{
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
        }, 1000)
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



