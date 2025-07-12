import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const EditItem = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Edit Item</h1>
          <p>This page will allow users to edit their item listings.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EditItem; 