import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([
    {
      title: 'Lorem ipsum',
      img: 'https://picsum.photos/300',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor at elit dignissim consectetur. Nunc eu quam et mauris dapibus pretium finibus pharetra tellus. Vestibulum efficitur, nibh quis pharetra vulputate, dolor mi venenatis nisi, ultrices porttitor dui quam et elit. Nulla posuere risus ante, non ullamcorper diam hendrerit a. Proin pretium pharetra magna, et tincidunt diam pellentesque eget. Nulla ultrices at massa sed tristique. Nam eget eros fringilla, fringilla lectus eu, malesuada tellus. Nullam laoreet, nibh at lobortis mattis, tortor nunc fringilla elit, quis tincidunt felis leo sit amet augue. Fusce molestie leo quis nisi tempus, a volutpat quam varius. Nulla mollis ullamcorper nulla sit amet tincidunt. Integer a tortor at lectus cursus aliquam id eget ex. ',
      date: '23.12.12',
    },
    {
      title: 'Lorem ipsum1',
      img: 'https://picsum.photos/300',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor at elit dignissim consectetur. Nunc eu quam et mauris dapibus pretium finibus pharetra tellus. Vestibulum efficitur, nibh quis pharetra vulputate, dolor mi venenatis nisi, ultrices porttitor dui quam et elit. Nulla posuere risus ante, non ullamcorper diam hendrerit a. Proin pretium pharetra magna, et tincidunt diam pellentesque eget. Nulla ultrices at massa sed tristique. Nam eget eros fringilla, fringilla lectus eu, malesuada tellus. Nullam laoreet, nibh at lobortis mattis, tortor nunc fringilla elit, quis tincidunt felis leo sit amet augue. Fusce molestie leo quis nisi tempus, a volutpat quam varius. Nulla mollis ullamcorper nulla sit amet tincidunt. Integer a tortor at lectus cursus aliquam id eget ex. ',
      date: '23.12.12',
    },
    {
      title: 'Lorem ipsum2',
      img: 'https://picsum.photos/300',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor at elit dignissim consectetur. Nunc eu quam et mauris dapibus pretium finibus pharetra tellus. Vestibulum efficitur, nibh quis pharetra vulputate, dolor mi venenatis nisi, ultrices porttitor dui quam et elit. Nulla posuere risus ante, non ullamcorper diam hendrerit a. Proin pretium pharetra magna, et tincidunt diam pellentesque eget. Nulla ultrices at massa sed tristique. Nam eget eros fringilla, fringilla lectus eu, malesuada tellus. Nullam laoreet, nibh at lobortis mattis, tortor nunc fringilla elit, quis tincidunt felis leo sit amet augue. Fusce molestie leo quis nisi tempus, a volutpat quam varius. Nulla mollis ullamcorper nulla sit amet tincidunt. Integer a tortor at lectus cursus aliquam id eget ex. ',
      date: '23.12.12',
    },
    {
      title: 'Lorem ipsum3',
      img: 'https://picsum.photos/300',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor at elit dignissim consectetur. Nunc eu quam et mauris dapibus pretium finibus pharetra tellus. Vestibulum efficitur, nibh quis pharetra vulputate, dolor mi venenatis nisi, ultrices porttitor dui quam et elit. Nulla posuere risus ante, non ullamcorper diam hendrerit a. Proin pretium pharetra magna, et tincidunt diam pellentesque eget. Nulla ultrices at massa sed tristique. Nam eget eros fringilla, fringilla lectus eu, malesuada tellus. Nullam laoreet, nibh at lobortis mattis, tortor nunc fringilla elit, quis tincidunt felis leo sit amet augue. Fusce molestie leo quis nisi tempus, a volutpat quam varius. Nulla mollis ullamcorper nulla sit amet tincidunt. Integer a tortor at lectus cursus aliquam id eget ex. ',
      date: '23.12.12',
    },
  ]);
  const addNews = (title, img, text, date) => {
    setNews([...news, {
      title, img, text, date,
    }]);
  };
  const removeNews = (id) => {
    setNews(news.filter((item) => item.title !== id));
  };
  return (
    <NewsContext.Provider value={{ news, addNews, removeNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
