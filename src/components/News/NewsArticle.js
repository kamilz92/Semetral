import React from 'react';

const NewsArticle = ({
  titel, date, img, text,
}) => (
  <article className="news__article">
    <h2 className="news__heading">{titel}</h2>
    <span className="news__dato">{date}</span>
    <div className="news__wrapper">
      <div className="news__imgDiv">
        <img src={img} alt="" className="news__img" />
      </div>
      <p className="news__text">{text}</p>
    </div>
  </article>
);

export default NewsArticle;
