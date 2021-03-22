import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { SiFacebook } from 'react-icons/si';
import styled from 'styled-components';

const Footer = () => {
  return (
    <MainFooter>
      <DSNLogo
        src="http://www.datasciencenigeria.org/wp-content/uploads/2017/08/DATA-SCIENCE-LOGO.png"
        alt="Data Science Nigeria"
      ></DSNLogo>
      <FooterContent>
        <FooterLink>
          <li>
            <Link to="/">Contact Us</Link>|
          </li>
          <li>
            <Link to="/faq">FAQ</Link>|
          </li>
          <li>
            <Link to="/policy">Privacy Policy</Link>|
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>|
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </FooterLink>
        <p> copyright &copy;{new Date().getFullYear()} Data Science Nigeria</p>
      </FooterContent>
      <FooterSocial>
        <a className="dsn-twitter" href="https://www.twitter.com">
          <AiFillTwitterCircle />
        </a>
        <a className="dsn-linkedin" href="https://www.linkedin.com">
          <TiSocialLinkedinCircular />
        </a>
        <a className="dsn-facebook" href="https://www.facebook.com">
          <SiFacebook />
        </a>
      </FooterSocial>
    </MainFooter>
  );
};

const MainFooter = styled.div`
  padding: 3.7rem;
  background: #02203c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  line-height: 1.5;
`;
const DSNLogo = styled.img`
  width: 12rem;
  height: 6rem;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

const FooterLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 7rem 0;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  li {
    list-style-type: none;
    &:not(:last-child) {
      margin-right: 20px;
    }
    a {
      text-decoration: none;
      color: #fff;
      margin-right: 1rem;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
`;
const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  a {
    color: #fff;
  }
  .dsn-twitter {
    font-size: 3rem;
  }
  .dsn-linkedin {
    font-size: 3.5rem;
  }
  .dsn-facebook {
    font-size: 2.65rem;
  }
`;

export default Footer;
