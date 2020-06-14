import React from 'react';
import './paragraph.scss';

const Paragraph = ({ children, bold }) => {
  const style = bold ? 'bold' : 'normal';
  return <p style={{ fontWeight: style }} className="paragraph">{children}</p>;
};

export default Paragraph;
