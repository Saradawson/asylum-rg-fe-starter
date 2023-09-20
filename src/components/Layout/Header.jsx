import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import AuthNav from '../../auth/auth-nav';

const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '30%',
        }}
      >
        <div id="loginBtn-container">
          <AuthNav></AuthNav>
        </div>
        <div
          id="nav"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Link to="/profile" style={{ color: '#E2F0F7' }}>
            Profile
          </Link>
          <Link to="/" style={{ color: '#E2F0F7' }}>
            Home
          </Link>
          <Link to="/graphs" style={{ color: '#E2F0F7' }}>
            Graphs
          </Link>
        </div>
      </div>
    </div>
  );
}

export { HeaderContent };
