import React from 'react';
import './LinkButton.css';

const LinkButton = ({ href, onClick, children }) => {
  return (
    <a href={href} onClick={onClick} className="link-button">
      {children}
    </a>
  );
};

export default LinkButton;
