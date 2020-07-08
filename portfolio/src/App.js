import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav, Navbar, Jumbotron, Carousel, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#Bio">Bio</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Resume">Resume</Nav.Link>
          <Nav.Link href="#Contact">Get in touch with me</Nav.Link>
        </Nav>
      </Navbar>


      <h1>The Greatest Porfolio EVER</h1>
      <br/> <br/> 

      <Jumbotron>
        <h3>Welcome to my portfolio! </h3>
        <p>
          This is where your going to learn everything great about me, Jordan Roenitz! You can learn fun fats about me, see projects I have done, see previous work history, and even learn how to get in touch with me!
  </p>
      </Jumbotron>

      <br/> <br/> 

      <Media>
        <img
          width={200}
          height={200}
          className="mr-3"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHPQV_DwjQHsA/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=oL_ZDaznjoOgtoqIHE3H-0kgIEnsO4ugJ5UYMJdZP20"
          alt="Its me, Jordan"
        />
        <Media.Body>
          <h5>Fun Jordan Facts:</h5>
          <ul class="facts">
            <li>-I am a recent graduate of University of Texas Austin's Full Stack Web Devolopment program!</li>
            <li>-I am currently and will forever be learning something new and constantly being impressed with how things work and the functionality of even the simplest of things.</li>
            <li>-Born in good ol' Sheboygan, WI and lived there till I moved to Milwaukee, WI to get my Marketing Degree</li>
            <li>-I am obsessed with traveling, and everything outdoors</li>
          </ul>


        </Media.Body>
      </Media>

      <br/> <br/>

      <Carousel>
  <Carousel.Item>
    <img
      className="Digital class slide"
      src="https://i.imgur.com/KGi6JHZ.png?1"
      alt="Digital Class"
    />
    <Carousel.Caption>
      <h3 style={{color: "gray"}}>Digital Class</h3>
      <p style={{color: "red"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="W4 side"
      src="https://i.imgur.com/k2XS3PO.png?1"
      alt="W4"
    />

    <Carousel.Caption>
      <h3 style={{color: "blue"}}>W4</h3>
      <p style={{color: "red"}}>These photos are originally set at 800x400.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Lunch and wag slide"
      src="https://i.imgur.com/v2LCdQv.png?1"
      alt="Lunch and Wag"
    />

    <Carousel.Caption>
      <h3 style={{color: "gray"}}>Lunch and Wag</h3>
      <p style={{color: "red"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
     <br/> <br/> 

<img
      className="Resume"
      src="https://i.imgur.com/sJCxmM5.png?1"
      alt="Resume"
    />

    <br/> <br/>

    
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>


    </div>

  );
}

export default App;
