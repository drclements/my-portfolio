import React from 'react'
import styled from 'styled-components'



const SocialNav = styled.nav`
    position: fixed;
    width: 60px;
    margin-top: 15%;
    transition: all 0.3s linear;
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,.4);
    z-index: 1;
        @media (max-width: 550px) {
            display: none

        }
`

const SocialLinks = () => {
  return (
    

    <SocialNav sticky="left" >
        <ul style={{paddingLeft: '0'}}>
            <li className="social">
                <a  href="https://www.linkedin.com/in/daniel-clements-codes/" target="_blank"
                rel="noreferrer">
                <i class="fab fa-linkedin-in"></i><span>Linkedin</span>
                </a>
            </li>
            <li className="social">
                <a href="https://github.com/drclements" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i><span>Github</span>
                </a>
            </li>
            <li className="social">
                <a href="https://www.instagram.com/drclements/?hl=en" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram"></i><span>Instagram</span>
                </a>
            </li>
            <li className="social">
                <a href="mailto:drclementslu@gmail.com" target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-envelope"></i><span>Send Email</span>
                </a>
            </li>
        </ul>   
    </SocialNav>
  )
}

export default SocialLinks