import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import more from '../more.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${more}) no-repeat fixed top;
        background-size: cover;
        color: #efefef;
        height: 500px;
        position: relative;
        z-index: -3;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

  `

const Parala =()=>{
    return(
        <Styles>
        <Jumbo fluid className = 'jumbo'>
            <div className='overlay'></div>
            <Container>
                <h1 style={{'text-align':'center','color':'#848986'}}>Ocean</h1>
                <p style={{'text-align':'center','color':'#848986'}}>parallax effect</p>
            </Container>

        </Jumbo>
        </Styles>
    );
}
export default Parala;