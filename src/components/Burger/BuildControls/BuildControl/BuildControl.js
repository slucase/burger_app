import React from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => (
   <div className = {classes.BuildControl}>
      <div className = {classes.Label}>{props.label}</div>
      <buttom className = {classes.Less}>Less</buttom>
      <buttom classname = {classes.More}>More</buttom>
   </div>
);

export default buildControl;