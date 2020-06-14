import React from 'react';
import './heading.scss';

const Heading = ({ tag: Tag, children }) => (
  <Tag className="heading">
    {children}
  </Tag>
);

export default Heading;
