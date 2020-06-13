import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([
    { title: 'Lorem ipsum', author: 'Lorem ipsim', id: 1 },
    { title: 'Lorem ipsum', author: 'Lorem ipsim', id: 2 },
  ]);
  const addNews = (title, author) => {
    setbooks([...news, { title,img, text, id: books.length + 1 }]);
  };
  const removeBook = (id) => {
    setbooks(news.filter((new) => new.id !== id));
  };
  return <NewsContext.Provider value={{ books, addBook, removeBook }}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
