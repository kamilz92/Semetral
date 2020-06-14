import React, { useContext, useState } from 'react';
import { PetContext } from '../../context/PetsContext';
import Heading from '../Heading/Heading';

const FormPets = () => {
  const { addPets } = useContext(PetContext);
  const [name, setname] = useState('');
  const [img, setImg] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [text, setText] = useState('');
  const addValue = (fn, e) => {
    fn(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPets(name, img, text);
    setname('');
    setImg('');
    setSex('');
    setAge('');
    setText('');
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Heading tag="h4">Legg Til</Heading>
      <div>
        <input onChange={(e) => addValue(setname, e)} value={name} type="text" placeholder="Name" />
        <input onChange={(e) => addValue(setImg, e)} value={img} type="text" placeholder="Bilde" />
        <input onChange={(e) => addValue(setSex, e)} value={sex} type="text" placeholder="Kjønn" />
        <input onChange={(e) => addValue(setAge, e)} value={age} type="text" placeholder="Alder" />
        <input onChange={(e) => addValue(setText, e)} value={text} type="text" placeholder="Tekst" />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};

export default FormPets;
