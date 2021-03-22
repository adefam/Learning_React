import React from 'react';
import Footer from '../Footer';
import styled from 'styled-components';
import NavBar from '../NavBar';
import cover from '../../static/heroImage.svg';
import { BiLinkExternal } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Wave from '../Wave';
import {
  titleAnimation,
  photoAnimation,
  buttonAnimation,
} from '../../animation';
import MainButton from '../MainButton';

// styled components
const LandingPage = () => {
  return (
    <Landing>
      <NavBar />
      <MeduimSection>
        <Wave />
        <MainText>
          <motion.h1 variants={titleAnimation} initial="hidden" animate="show">
            Code <span>Evaluation</span>
          </motion.h1>
          <motion.h1 variants={titleAnimation} initial="hidden" animate="show">
            Tool
          </motion.h1>
          <motion.p variants={titleAnimation} initial="hidden" animate="show">
            This is a tool for grading Python code exercises similar to
            Codecademy. A user is able to submit solutions to coding problems
            and get feedback on whether the solution is correct or not
          </motion.p>
          <MainButton
            title="Get Started"
            link="sign-in"
            icon={<BiLinkExternal />}
            styles={buttonStyles}
            variants={buttonAnimation}
            initial="hidden"
            animate="show"
          />
        </MainText>
        <motion.img
          alt="hero"
          src={cover}
          variants={photoAnimation}
          initial="hidden"
          animate="show"
        />
      </MeduimSection>
      <Footer />
    </Landing>
  );
};

const Landing = styled(motion.div)`
  min-height: 100vh;
`;

const MeduimSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  line-height: 1.5;
  align-items: center;
  min-height: 90vh;
  img,
  button,
  p {
    z-index: 2;
  }
`;

const MainText = styled.div`
  h1 {
    color: #02203c;
    font-size: 3.5rem;
    line-height: 0.8;
  }
  span {
    color: firebrick;
  }
  p {
    width: 400px;
    line-height: 2;
  }
`;

// inline styles
const buttonStyles = {
  link: {
    alignItems: 'center',
  },
  btn: {
    background: '#02203c',
    position: 'relative',
    color: '#fff',
    fontSize: '1.5rem',
    padding: '0.8rem',
    border: '#02203c solid 2px',
    borderRadius: '0.5rem',
    marginTop: '2rem',
    cursor: 'pointer',
  },
  svg: {
    color: '#fff',
    verticalAlign: 'middle',
    fontSize: '1.9rem',
  },
};

export default LandingPage;
