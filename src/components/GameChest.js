import React from "react";
import { Image } from "react-bootstrap";
import photo from '../assets/img/Game-Chest.png'
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TechBox = styled.div`
    box-shadow: 0 0 10px 1px rgba(0,0,0,.3);
    border-radius: 5px;
    padding: 5px;
    transition: transform .3s;
        &:hover {
            transform: scale(1.1)
        } 
`

const Overview = styled.div`
    max-width:65%;
    box-shadow: 0 0 10px 1px rgba(0,0,0,.3);
    border-radius: 5px;
        @media (max-width: 550px) {
            max-width: 100%
        }
`

function GameChest() {
  return (
    <div className="mb-4">
      <div className=" relative">
            <div className="absolute center w-full  p-2">
              <h2 className="py-2 display-5">The Game Chest</h2>
              <p className="">JavaScript | HTML | CSS | JSON | API</p>
            </div>
        <div className="center ">
            <Image
            rounded
            className="absolute"
            style={{
                maxWidth:"65%",
                boxShadow: "0 0 10px 1px rgba(0,0,0,.3)"
            }}
            src={photo}
            alt="/"
            />
        </div>
      </div>

      <Overview className="mt-5 mx-auto p-2 py-4" 
          
        >
        <div className="p-4">
          <h2>Project Overview</h2>
          <p className="mt-2">
          The Game Chest is a powerful search engine allowing a user to easily scour the Board Game Atlas API for your favorite games! Search a game you know and find an expansion, roll the dice for a random game or set search parameters. The Game Chest will return the best results based on what the search engine is fed. This was the very first project I completed at Flatiron School and only had been coding for 2 weeks! I'm very proud of what I was able to accomplish with my partner in such a short amount of time. This app was built with vanilla JavaScript, CSS, and HTML. The backend was emulated using a JSON server.  
          </p>
        <br></br>
        <label><strong>Authors</strong></label>
        <p>Daniel Clements, Scott Meadows</p>
          <div className="center">
            <a
                href="https://www.loom.com/share/ed0e5521fb154735980f319a9271b04c"
                target="_blank"
                rel="noreferrer"
            >
                <Button  variant="dark" className="px-5 py-2 mt-4 ">Demo</Button>
            </a>
          </div>
        </div>
          <div className="p-4">
            <p className="text-center pb-2"><strong>Technologies</strong></p>
            <Row className=" center">
                <Col>
                    <TechBox>
                        JavaScript
                    </TechBox>
                </Col>
                <Col>
                    <TechBox>
                        HTML
                    </TechBox>
                </Col>
                
                <Col>
                    <TechBox>
                        CSS
                    </TechBox>
                </Col>
          
                <Col>
                    <TechBox>
                        JSON
                    </TechBox>
                </Col>
            </Row>
          </div>
        </Overview>
    </div>
  );
}

export default GameChest;