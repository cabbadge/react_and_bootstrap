import React, { Component } from "react";
import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import firstImg from "../assets/forest.jpg";
import secondImg from "../assets/second.jpeg";
export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-exaple" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Desing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Framworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src={firstImg} alt="first" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim dolore laudantium adipisci odio placeat eum sit sint
                    consequuntur dolorum soluta, ipsa quos provident et eius.
                    Voluptatem ea fuga quo maiores?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src={secondImg} alt="second" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim dolore laudantium adipisci odio placeat eum sit sint
                    consequuntur dolorum soluta, ipsa quos provident et eius.
                    Voluptatem ea fuga quo maiores?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={firstImg} alt="first" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim dolore laudantium adipisci odio placeat eum sit sint
                    consequuntur dolorum soluta, ipsa quos provident et eius.
                    Voluptatem ea fuga quo maiores?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src={secondImg} alt="second" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim dolore laudantium adipisci odio placeat eum sit sint
                    consequuntur dolorum soluta, ipsa quos provident et eius.
                    Voluptatem ea fuga quo maiores?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src={firstImg} alt="first" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim dolore laudantium adipisci odio placeat eum sit sint
                    consequuntur dolorum soluta, ipsa quos provident et eius.
                    Voluptatem ea fuga quo maiores?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
