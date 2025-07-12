import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Messages = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Messages</h1>
          <p>This page will display user messages and conversations.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Messages; 