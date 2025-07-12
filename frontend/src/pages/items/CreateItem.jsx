import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CreateItem = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Create New Item</h1>
          <p>This page will allow users to create new item listings.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateItem; 