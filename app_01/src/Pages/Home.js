import React, { Component } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <Row className="m-4" md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Develops</Card.Title>
                <Card.Text>
                  Enim dolore laudantium adipisci odio placeat eum sit sint
                  consequuntur dolorum soluta, ipsa quos provident et eius.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Develops</Card.Title>
                <Card.Text>
                  Enim dolore laudantium adipisci odio placeat eum sit sint
                  consequuntur dolorum soluta, ipsa quos provident et eius.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Card.Body>
                <Card.Title>Develops</Card.Title>
                <Card.Text>
                  Enim dolore laudantium adipisci odio placeat eum sit sint
                  consequuntur dolorum soluta, ipsa quos provident et eius.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}
