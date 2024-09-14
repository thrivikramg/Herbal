import React from 'react';
import './SmallParagraph.css';

const SmallParaghraph = ({ label }) => {
  return (
    <p className="small-paragraph">
      {label}
    </p>
  );
};

export default SmallParaghraph;