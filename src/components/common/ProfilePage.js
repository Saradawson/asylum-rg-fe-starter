import React from 'react';
import { Container } from '@material-ui/core';
import { Row, Col } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();

  if (!user) return <h1>You need to login to access profile information...</h1>;

  return (
    <Container className="profile-container">
      <Row style={{ display: 'flex' }}>
        <Col md={2} style={{ marginRight: '2%' }}>
          <img
            src={user.picture}
            alt="Profile"
            className="profile-picture"
            style={{ borderRadius: '50%' }}
          />
        </Col>
        <Col
          md
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <h2>{user.name}</h2>
          <p className="user-email">{user.email}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
