import React from 'react';
import styled from "styled-components";
import profile from "../assets/img/Profile.jpg"
import img1 from "../assets/img/5B93AA9C-7743-403A-9A95-8627ECF8BB22.jpg"
import img2 from "../assets/img/IMG_0128.jpeg"
import img3 from "../assets/img/A18143D4-79B8-4190-B65B-7B0A802677D9.jpg"
import img4 from "../assets/img/9DEF3C54-4830-462F-AFB4-29D33B605C7F.jpeg"
import img5 from "../assets/img/BC1FE715-86F2-4077-8481-1AA7A3044607.jpg"
import img7 from "../assets/img/5F1A79FD-FFC9-4A12-8083-A422D6B9868C.jpg"
import img6 from "../assets/img/IMG_3729.jpg"
import img8 from "../assets/img/E7567E00-6D9B-4DD4-ABE4-79F57AB85B18.jpg"
import img9 from "../assets/img/IMG_1752.jpeg"
import Container  from 'react-bootstrap/Container';


const HexGallery = styled.section` 
margin: auto;
margin-top: 25px;
max-width: 1000px;
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-auto-rows: 185px;
grid-gap: 10px;
padding-top: 15px;
padding-bottom: 55px;
padding-left: 25px;
overflow-x: auto;
overflow-y: hidden
`

const HexFrame = styled.div`
display: flex;
position: relative;
width: 200px;
height: 225px;
background-color: #424242;
-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
transition: transform .3s;
    &:hover {
        transform: scale(1.1)
    } 

    @media (max-width: 500px) {
        &:hover {
            transform: none
        }
        
    }
`

const ProfileHexImg = styled.img`
width: 100%;
height: auto;
display: block;
object-fit: cover;
object-position: 0%;
transition: transform .3s;
    &:hover {
        transform: scale(1.1)
    } 
`

const HexImgD = styled.img`
width: 100%;
height: auto;
display: block;
object-fit: cover;
transition: transform .3s;
    &:hover {
        transform: scale(1.1)
    } 
`

const HexImg1 = styled.img`
width: 100%;
height: auto;
display: block;
object-fit: cover;
object-position: 90%;
transition: transform .3s;
    &:hover {
        transform: scale(1.1)
    } 
`

const HexImg3 = styled.img`
width: 100%;
height: auto;
display: block;
object-fit: cover;
object-position: 16%;
transition: transform .3s;
    &:hover {
        transform: scale(1.1)
    } 
`



function ImageGallery() {
return(
    <Container style={{marginTop:"8rem"}} id="nature" className="py-5">
        <h2  className="center display-5 pt-5 py-3">Nature</h2>
        <HexGallery >
            <HexFrame className="hex">
                <ProfileHexImg src={profile}></ProfileHexImg>
            </HexFrame>
            <HexFrame className="hex">
                <HexImg1 src={img1}></HexImg1>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img2}></HexImgD>
            </HexFrame>
            <HexFrame className="hex">
                <HexImg3 src={img3}></HexImg3>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img4}></HexImgD>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img5}></HexImgD>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img6}></HexImgD>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img7}></HexImgD>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img8}></HexImgD>
            </HexFrame>
            <HexFrame className="hex">
                <HexImgD src={img9}></HexImgD>
            </HexFrame>
        </HexGallery>
    </Container>
)}

export default ImageGallery