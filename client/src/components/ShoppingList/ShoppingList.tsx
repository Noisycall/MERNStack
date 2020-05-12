import React, { Component } from "react";
import { Button, Col, Container, Fade, ListGroup, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
interface stateschema {
  items: Array<itemschema>;
}
interface itemschema {
  name: string;
  id: string;
}
class ShoppingList extends Component<any, any> {
  state: stateschema = {
    items: [
      { name: "Eggs", id: nanoid() },
      { name: "Milk", id: nanoid() },
      { name: "Steak", id: nanoid() },
      { name: "Water", id: nanoid() },
    ],
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {this.state.items.map((elem) => {
                return (
                  <Fade appear={true} in={true}>
                    <ListGroup.Item key={elem.id}>
                      {elem.name}
                      <Button
                        className="float-right"
                        variant="primary"
                        onClick={() => {
                          this.setState({
                            items: this.state.items.filter(
                              ({ id, name }) => id !== elem.id
                            ),
                          });
                        }}
                      >
                        Done
                      </Button>
                    </ListGroup.Item>
                  </Fade>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ShoppingList;
