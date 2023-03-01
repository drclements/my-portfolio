import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.p`
    margin: auto; 
    max-width: 70%;
    font-size: 23px

`
const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`

const Greeting = () => {
  return (
    <div  className="text-center">
      <div style={{margin:"4rem 10rem"}} className="p-3 flex justify-center items-center">
        <div>
            <WelcomeContainer className="center">
                <div style={{borderRight:"solid 1px", paddingRight:"45px"}}>
                    <h1 className="font-face-pb"><strong>Port-</strong></h1>
                    <h1 className="font-face-pr">folio</h1>
                    <p className="font-face-pr" style={{backgroundColor:"black", color:"white", padding:"5px", fontWeight:"bold"}}>by Daniel Clements</p>
                </div>
                <h1 style={{marginLeft:"2rem", fontSize:"45px"}}>
                   Welcome!
                </h1>
            </WelcomeContainer>
          <Paragraph className="py-4">
            <span style={{fontWeight:"bold"}} >
              I'm a full stack software engineer
            </span>{" "}
            who recently graduated from Flatiron School. Before embarking on this new and exciting journey, I built a career centered around creating greater access to mental health services and outdoor recreation. I have directed both community based and inpatient programs primarily geared towards supporting youth realize their truest and authentic self. I have strong collaborative and human-centered leadership strengths with ample project management experience.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Greeting