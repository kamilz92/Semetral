import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([
    { title: 'Lorem ipsum', author: 'Lorem ipsim', id: 1 },
    { title: 'Lorem ipsum', author: 'Lorem ipsim', id: 2 },
  ]);
  return <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
