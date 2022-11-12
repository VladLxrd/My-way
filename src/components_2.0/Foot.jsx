import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
const Footer =()=>{
    return(
       
    <Container fluid style ={{background: '#343A40',color:'#F0EAD6'}}>
        <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
           <p>My Email - zombybox@gmail.com</p>
        </Container>
    </Container>
    );
}
export default Footer;