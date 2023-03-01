import React from 'react'
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import caseConnect from '../assets/img/Case-Connect.png'
import stressBuster from '../assets/img/Stress-Buster.png'
import gameChest from "../assets/img/Game-Chest.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Container = styled.div`

`

function Projects() {
    return (
      <div id="projects" className=" py-5">
          <h2 className="display-5 center  py-5">
            Projects
          </h2>
        <Container className="px-2 py-1 ">
          <Row  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mx-0 mx-sm-5 mx-sm-5 px-0 px-sm-4">
            <Col >
                <ProjectItem
                title="Case Connect"
                backgroundImg={caseConnect}
                stack="React | Ruby on Rails"
                descript="Customized Case Management solution for a mental health community based organization to easily manage their caseload"
                projectUrl="/case-connect"
                />
            </Col>
            <Col>
                <ProjectItem
                title="Stress Buster Journal"
                backgroundImg={stressBuster}
                stack="React | Ruby on Rails"
                descript="Track health metrics in areas identified by ACEs Aware's Roadmap to Resilience to help you form stress busting habits"
                projectUrl="/stress-buster"
                />
            </Col>
            <Col>
                <ProjectItem
                title="The Game Chest"
                backgroundImg={gameChest}
                stack="JavaScript | HTML | CSS"
                descript="Search, rate & review your faviorite board games. Find recommendations based on genre, playtime, age and so much more!"
                projectUrl="/game-chest"

                />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  

export default Projects