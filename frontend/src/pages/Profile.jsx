import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>User Profile</h1>
          <p>This page will display and allow editing of user profile information.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile; 