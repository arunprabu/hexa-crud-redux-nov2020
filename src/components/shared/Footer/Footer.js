// Functional Comp with Anonymous Fn
import React from 'react';
import Menu from '../Menu/Menu';

// Comp with Anonymous Fn
const Footer = function(){
  // variables can be added inside
  const devName = 'Arun';

  return(
    <div className="text-center">
      <hr />
      <Menu />
      <p>Copyright 2020 | {devName}</p>
      <p>Happily developed in a training in &nbsp;
        <span style={{fontWeight: 'bold'}}>November 2020</span>!
      </p>
    </div>
  )
}

export default Footer;