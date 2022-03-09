import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank" className="download-button">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button><br/><br/>
        <Button variant="primary" href={props.GitFrontEndLink} target="_blank" className="download-button">
          <BsGithub /> &nbsp;
          Front End
        </Button><br/><br/>
        <Button variant="primary" href={props.GitBackEndLink} target="_blank" className="download-button">
          <BsGithub /> &nbsp;
          Back End
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
