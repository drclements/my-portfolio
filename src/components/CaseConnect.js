import React from "react";
import { Image } from "react-bootstrap";
import caseConnect from '../assets/img/Case-Connect.png'
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
              <h2 className="py-2 display-5">Case Connect</h2>
              <p className="">React | Ruby on Rails | JavaScript | Styled Components</p>
            </div>
        <div className="center ">
            <Image
            rounded
            className="absolute"
            style={{
                maxWidth:"65%",
                boxShadow: "0 0 10px 1px rgba(0,0,0,.3)"
            }}
            src={caseConnect}
            alt="/"
            />
        </div>
      </div>

      <Overview className="mt-5 mx-auto p-2 py-4" 
             
        >
        <div className="p-4">
          <h2>Project Overview</h2>
          <p className="mt-2">
          Case Connect is a custom case management solution geared towards helping a community based organization simplify their workflow and documentation. I built this for my capstone project at Flatiron School where we were given 2 weeks to stand up a working product. Given my background in mental health and directing programs for the last four years, this was a big motivator for me coming into the program as I seek to help other helping professionals with their administrative needs so that they can worry less about the nitty gritty and focus on their mission. This was a solo project and built from the ground up! The backend is handled by Ruby on Rails while the frontend was built with React. The relational database was built with PostgreSQL using the well known MVC framework to ensure scalability and performance. I have integrated ActiveStorage to handle file management where caseworkers can upload images and pdfs relevant to their cases. Authorization is handled on the backend using BCrypt to hash your password. The app authenticates the user and based on their roles in the organization determines user access and permissions via protected routes. I integrated Chart.js to visualize data in real time; this was particularly useful for tracking treatment outcomes. I also incorporated FullCalendar for tracking program events. Finally, all of this was styled using styled components. My goal (which I feel I achieved) was to bring the cases to life so the user feels more connected to the clients they're working with. I did not want yet another cold electronic health record!
          </p>
          <div className="center">
            {/* <a
                href="https://case-connect.onrender.com/"
                target="_blank"
                rel="noreferrer"
            >
                <Button style={{marginRight:"1rem"}} variant="dark" className="px-5 py-2 mt-4 ">Live Site</Button>
            </a> */}
            <a
                href="https://github.com/drclements/case-connection"
                target="_blank"
                rel="noreferrer"
            >
                <Button style={{marginRight:"1rem"}} variant="dark" className="px-5 py-2 mt-4 ">GitHub</Button>
            </a>
            <a
                href="https://youtu.be/n5o7g0SEz20?t=726"
                target="_blank"
                rel="noreferrer"
            >
                <Button style={{marginRight:"1rem"}} variant="dark" className="px-5 py-2 mt-4">Demo</Button>
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
                        Active Storage
                    </TechBox>
                </Col>
                <div className="mt-3"></div>
                <Col>
                    <TechBox>
                        Chart.js
                    </TechBox>
                </Col>
                <Col>
                    <TechBox>
                        FullCalendar
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