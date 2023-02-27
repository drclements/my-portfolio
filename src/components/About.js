import React from 'react'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
import profile from '../assets/img/IMG_4092.JPG'

const Container = styled.div`
margin: auto; 
max-width: 70%;
`

const ImageContainer = styled.div`
`

export const About = () => {
  return (

    <div id="about" style={{marginTop:"10rem"}} className="py-5 center">
          <h2  className="display-5 pt-5 py-3">
            About Me
          </h2>
      <Container className="py-1 ">
          <p className="py-2">
            Growing up in rural Canada, the internet was a luxury of the patient. The now nostalgic screeching sound of connecting to the internet through dial up was my reality until I left for universtiy. Even so, I was deidicated enough to wait patiently as I had a fascination for everything the internet had to offer. It's ability to connect us across miles, even thousands of miles, was always a curiousity and having so much information at your finger tips. However, it wasn't until much later in life that I decided to lean into this curiousity and begin learning how it all works.
          </p>
          <p className="py-2">
            Prior to completing Flatiron School's Software Engineering bootcamp, I had a successful career in mental health. I started at an adolescent residential treatment center  in Alaska where we worked with youth with serious emotion disturbance and complex trauma. This program fused another passion of mine into their approach: nature connection and outdoor recreation. From there I have directed several programs across the US. From Califonia, a community non-profit nature based therapeutic mentoring program to running crisis stabilization and long term treatment centers in Downeast Maine. I've had the most extraordinary opportunity to make an impact on youth and adults needing support through some of their most difficult times. 
          </p>
          <p className="pt-2 pb-5">
            In 2022, I realized I needed a shift as the mental health field can be very taxing. I wanted to explore other opportunities to still make an impact but with a broader reach. I quickly discovered that in my numerous director roles I LOVED building tools. Whether that was writing policy, mapping workflows or writing full operational or program manuals. At my heart, I discovered the joy of helping others through created solutions. My hope is to use this new found platfrom to further help create mental health and outdoor equity. 
          </p>
       
        <ImageContainer >
          <Image width="90%" rounded thumbnail className="p-3" style={{ boxShadow: "0 0 10px 1px rgba(0,0,0,.3)"}}  src={profile} ></Image>
          <p>Matanuska Peak - Alaska</p>

        </ImageContainer>
      </Container>
    </div>
  )
}

export default About
