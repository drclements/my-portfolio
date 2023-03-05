import React from "react";
import { Image } from "react-bootstrap";
import photo from '../assets/img/Stress-Buster.png'
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

function CaseConnect() {
  return (
    <div className="mb-4">
      <div className=" relative">
            <div className="absolute center w-full  p-2">
              <h2 className="py-2 display-5">Stress Buster</h2>
              <p className="">React | Ruby on Rails | Sinatra | Styled Components</p>
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

      <Overview className="mt-5 mx-auto p-2 py-4" >
        <div className="p-4">
          <h2>Project Overview</h2>
          <p className="mt-2">
          Stress Buster was a project that I parented all through my Flatiron School experience. The purpose of stress busters was to allow the user to journal using a quote prompt or without. Within the journal entry you had the option to input some simple health data to track seven areas identified by ACEs Aware's Roadmap to Resilience as being critical areas that support overall wellness. You have the ability to view previous journal entries and comment on a community forum. Your dashboard, takes all the data from your journal entries and averages it giving you an idea overall how you are doing in each of the seven categories. First, this app was built using React while utilizing a json server to handle the backend. Version 2, the app backend was built out using ActiveRecord, Sinatra and SQLite. Finally, the latest version was rebuilt using Rails and the database was converted to PostgreSQL. This project was worked on by other Flatiron students during each phase of development and are so named below. The like feature in the community forum was built using a polymorphic relationship. Authorization is handled by BCrypt and authentication is handled on the backend to ensure that only your data is being passed to the frontend. Daily quote fetched from Quotable API. This app was deployed on Render for all to use.
          </p>
        <br></br>
        <label><strong>Authors</strong></label>
        <p><strong>V.1: </strong>Daniel Clements, Ana Rosario, Timmy Yan</p>
        <p><strong>V.2: </strong>Daniel Clements, Ana Rosario, Scott Meadows</p>
        <p><strong>V.3: </strong>Daniel Clements, Scott Meadows</p>
          <div className="center">
            <a
                href="https://stress-busters.onrender.com/"
                target="_blank"
                rel="noreferrer"
            >
                <Button style={{marginRight:"1rem"}} variant="dark" className="px-5 py-2 mt-4 ">Live Site</Button>
            </a>
            <a
                href="https://github.com/Saverton/stress-buster-rails"
                target="_blank"
                rel="noreferrer"
            >
                <Button style={{marginRight:"1rem"}} variant="dark" className="px-5 py-2 mt-4 ">GitHub</Button>
            </a>
          </div>
        </div>
          <div className="p-4">
            <p className="text-center pb-2"><strong>Technologies</strong></p>
            <Row className=" center">
                <Col>
                    <TechBox>
                        React
                    </TechBox>
                </Col>
                <Col>
                    <TechBox>
                        Ruby on Rails
                    </TechBox>
                </Col>
                
                <Col>
                    <TechBox>
                        PostgreSQL
                    </TechBox>
                </Col>
                <div className="mt-3"></div>
                <Col>
                    <TechBox>
                        Styled Components
                    </TechBox>
                </Col>
                <Col>
                    <TechBox>
                        Polymorphic Relationships
                    </TechBox>
                </Col>
                <Col>
                    <TechBox>
                        Render
                    </TechBox>
                </Col>
             
            </Row>
          </div>
        </Overview>
    </div>
  );
}

export default CaseConnect;