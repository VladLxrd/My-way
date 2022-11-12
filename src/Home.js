import React from "react";
import Parala from "./components_2.0/Parala";
import { Container, Carousel, Alert, Card} from "react-bootstrap";




const Home = () =>{
    return(
      <>
     
      <Carousel fade>
      <Carousel.Item style= {{'height':'600px'}}>
        <img
          className="d-block w-100"
          src="https://xn----8sbiecm6bhdx8i.xn--p1ai/sites/default/files/images/shkolnikam/more.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{'color':'black'}}>Horizon</h3>
          <p style={{'color':'black'}}>so unusual</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style= {{'height':'600px'}}>
        <img
          className="d-block w-100"
          src="https://c.wallhere.com/photos/24/b2/1600x1000_px_beach_island_landscape_nature_Palm_Trees_sand_sea-1075307.jpg!d"
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3 style={{'color':'black'}}>Palm trees</h3>
          <p style={{'color':'black'}}>love coconuts</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style= {{'height':'600px'}}>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Akashi_Kaikyo_Ohashi_01.jpg"
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3 style={{'color':'black'}}>Bridge</h3>
          <p style={{'color':'black'}}>Engineering marvel</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    
    <Container>
    <Alert variant="success" style={{marginTop:10}}>
    <Alert.Heading>Big bang</Alert.Heading>
    <p>
    Our whole universe was in a hot, dense state
Then nearly fourteen billion years ago expansion started, wait
The earth began to cool, the autotrophs began to drool
Neanderthals developed tools
We built a wall (we built the pyramids)
Math, science, history, unraveling the mysteries
That all started with the big bang (bang)</p>
    <hr />
    <p className="mb-0">
      the song
    </p>
    </Alert>
    </Container>
    <Parala/>
    <Card className="bg-dark text-white">
  <Card.Img src="https://99px.ru/sstorage/53/2016/10/tmb_181496_1786.jpg" alt="Card image" style={{height: '15rem'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>just picture</Card.Text>
  </Card.ImgOverlay>
</Card>
    


  
  
    
    </>
    );
}
export default Home;