import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.p`
    margin: auto; 
    max-width: 70%;
    font-size: 23px;
      @media (max-width: 500px) {
          font-size: 18px;
         
          margin: 0 1rem;
          max-width: 100%
          
      }

`
const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
      @media (max-width: 500px) {
        & h1 {
          margin: 0 1rem;
        }

        & div {
          padding: 0 25px
        }
      }
`

const GreetingContainer = styled.div`
  margin: 3rem;
      @media (max-width: 500px) {
        margin: 3rem 1rem
      }
`

const Greeting = () => {
  return (
    <div  className="center">
      <GreetingContainer 
       
      className="p-2 grid  ">
        <div>
            <WelcomeContainer >
                <div style={{borderRight:"solid 1px", paddingRight:"45px"}}>
                    <h1 className="font-face-pb"><strong>Port-</strong></h1>
                    <h1 className="font-face-pr">folio</h1>
                    <p className="font-face-pr" style={{backgroundColor:"black", color:"white", padding:"5px", fontWeight:"bold"}}>by Daniel Clements</p>
                </div>
                <h1 style={{marginLeft:"2rem", }}>
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
      </GreetingContainer>
    </div>
  )
}

export default Greeting