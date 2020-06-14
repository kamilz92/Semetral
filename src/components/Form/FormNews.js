import React, { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import Heading from '../Heading/Heading';

const FormNews = () => {
  const { addNews } = useContext(NewsContext);
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [text, setText] = useState('');
  const addValue = (fn, e) => {
    fn(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNews(title, img, text);
    setTitle();
    setImg('');
    setText('');
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Heading tag="h4">Legg Til</Heading>
      <div>
        <input onChange={(e) => addValue(setTitle, e)} value={title} type="text" placeholder="Title" />
        <input onChange={(e) => addValue(setImg, e)} value={img} type="text" placeholder="Bilde" />
        <input onChange={(e) => addValue(setText, e)} value={text} type="text" placeholder="Tekst" />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};

export default FormNews;
