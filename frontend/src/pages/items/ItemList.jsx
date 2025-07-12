import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Browse Items</h1>
          <p>This page will display all items for sale.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemList; 