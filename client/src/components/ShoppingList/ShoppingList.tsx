import React, { Component } from "react";
import { Col, Container, Fade, ListGroup, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
interface stateschema {
  items: Array<any>;
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
                    <ListGroup.Item
                      key={elem.id}
                      action
                      onClick={() => {
                        this.setState({
                          items: this.state.items.filter(
                            (item) => item.id !== elem.id
                          ),
                        });
                      }}
                    >
                      {elem.name}
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
