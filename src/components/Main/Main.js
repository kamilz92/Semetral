import React from 'react';
import './main.scss';

const Main = ({ mainTitle,children }) => (
  <main className="main">
    <h2 className="main__heading">{mainTitle}</h2>
    {children}
  </main>
);

export default Main;
