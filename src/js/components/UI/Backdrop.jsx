import React from 'react';

// backdrop component
const Backdrop = ({ show, click }) => (show ? <div className="backdrop" onClick={click} /> : null);

export default Backdrop;
