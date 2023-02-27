import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";


function ProjectItem({ title, backgroundImg, stack, projectUrl, descript }) {
const history = useHistory()
  return (
    <Card className="h-100" >
    <Card.Img variant="top" src={backgroundImg} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text >{stack}</Card.Text>
      <Card.Text>{descript}</Card.Text>
      <Button onClick={() => history.push(projectUrl)} variant="dark">More Info</Button>
    </Card.Body>
  </Card>
  );
}

export default ProjectItem;