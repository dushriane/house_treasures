import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Transactions = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>Transactions</h1>
          <p>This page will display user transaction history.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions; 