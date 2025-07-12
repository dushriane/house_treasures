import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ItemDetail = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Item Details</h1>
          <p>This page will display detailed information about a specific item.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail; 