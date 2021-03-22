import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MainButton = (props) => {
  return (
    <Link to={props.link} style={props.styles.link}>
      <motion.button
        style={props.styles.btn}
        variants={props.variants}
        initial={props.initial}
        animate={props.animate}
      >
        <span style={props.styles.svg}>{props.icon}</span> {props.title}
      </motion.button>
    </Link>
  );
};

export default MainButton;
