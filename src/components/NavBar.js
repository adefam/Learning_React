import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { HiOutlineArrowCircleUp } from 'react-icons/hi';
import { BiLinkExternal } from 'react-icons/bi';
import MainButton from './MainButton';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Container>
      <NavLink1>
        <LogoBox
          src="http://www.datasciencenigeria.org/wp-content/uploads/2017/08/DATA-SCIENCE-LOGO.png"
          alt="Data Science Nigeria"
        ></LogoBox>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/courses">
            Courses <AiFillCaretDown />
          </Link>
        </li>
        <li>
          <Link to="/content">
            Content <AiFillCaretDown />
          </Link>
        </li>
      </NavLink1>
      <NavLink2>
      <MainButton
          title="Sign In"
          link="sign-in"
          icon={<BiLinkExternal />}
          styles={buttonStyles}
        />
        <MainButton
          title="Sign Up"
          link="sign-up"
          icon={<HiOutlineArrowCircleUp />}
          styles={buttonStyles}
        />
      </NavLink2>
    </Container>
  );
};

// styled components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 34px;
  color: #001528;
  min-height: 5vh;
  border-bottom: 0.5px solid firebrick;
  cursor: pointer;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: #001528;

      svg {
        vertical-align: middle;
      }
    }
  }
`;

const NavLink1 = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
`;

const LogoBox = styled.img`
  width: 8rem;
  height: 3.7rem;
  margin-right: 4rem;
`;

const NavLink2 = styled.ul`
  display: flex;
  align-items: center;

  li {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

// inline styles
const buttonStyles = {
  link: {
    alignItems: 'center',
    marginRight: '1rem'
  },
  btn: {
    background: '#02203c',
    color: '#fff',
    fontSize: '1rem',
    padding: '0.4rem',
    alignContent: 'center',
    border: '#000 solid 1px',
    borderRadius: '0.2rem',
    cursor: 'pointer'
  },
  svg: {
    verticalAlign: 'middle',
    color: '#fff',
  },
};

export default NavBar;
