import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Giriprasath </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJS, JavaScript, HTML, CSS. Also created several websites using ReactJS, nodeJS, Express and MongoDB.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Badminton,Football,cricket
            </li>
            <li className="about-activity">
              <ImPointRight />  watching historic episodes and movies
            </li>
            <li className="about-activity">
              <ImPointRight />  Investing and learning about investing
            </li>
            <li className="about-activity">
              <ImPointRight />  Crypto
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
