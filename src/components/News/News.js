import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import NewsArticle from './NewsArticle';
import './news.scss';

const News = () => {
  const { news } = useContext(NewsContext);
  console.log(news);
  return (
    <section className="news">
      {news.map((item) => (
        <NewsArticle
          titel={item.title}
          key={item.title}
          img={item.img}
          text={item.text}
          date={item.date}
        />
      ))}
    </section>
  );
};

export default News;
