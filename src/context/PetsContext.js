import React, { createContext, useState } from 'react';

export const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const [pets, setPets] = useState([
    {
      name: 'Luna',
      img: 'https://picsum.photos/200',
      text:
        'Nam suscipit commodo tristique. Mauris lacinia vulputate purus rutrum dignissim. Nunc tempus leo in urna mollis finibus. Fusce gravida sit amet ante sit amet porta. Nullam vel porta dolor. Etiam feugiat lorem a sollicitudin semper. Pellentesque congue posuere varius.',
      sex: 'female',
      age: 1.2,
    },
    {
      name: 'Blåbær1',
      img: 'https://picsum.photos/200',
      text:
        'Nam suscipit commodo tristique. Mauris lacinia vulputate purus rutrum dignissim. Nunc tempus leo in urna mollis finibus. Fusce gravida sit amet ante sit amet porta. Nullam vel porta dolor. Etiam feugiat lorem a sollicitudin semper. Pellentesque congue posuere varius.',
      sex: 'male',
      age: 0.8,
    },
    {
      name: 'Blåbær2',
      img: 'https://picsum.photos/200',
      text:
        'Nam suscipit commodo tristique. Mauris lacinia vulputate purus rutrum dignissim. Nunc tempus leo in urna mollis finibus. Fusce gravida sit amet ante sit amet porta. Nullam vel porta dolor. Etiam feugiat lorem a sollicitudin semper. Pellentesque congue posuere varius.',
      sex: 'male',
      age: 0.8,
    },
    {
      name: 'Blåbær3',
      img: 'https://picsum.photos/200',
      text:
        'Nam suscipit commodo tristique. Mauris lacinia vulputate purus rutrum dignissim. Nunc tempus leo in urna mollis finibus. Fusce gravida sit amet ante sit amet porta. Nullam vel porta dolor. Etiam feugiat lorem a sollicitudin semper. Pellentesque congue posuere varius.',
      sex: 'male',
      age: 0.8,
    },
    {
      name: 'Blåbær4',
      img: 'https://picsum.photos/200',
      text:
        'Nam suscipit commodo tristique. Mauris lacinia vulputate purus rutrum dignissim. Nunc tempus leo in urna mollis finibus. Fusce gravida sit amet ante sit amet porta. Nullam vel porta dolor. Etiam feugiat lorem a sollicitudin semper. Pellentesque congue posuere varius.',
      sex: 'male',
      age: 0.8,
    },
    {
      name: 'Blåbær5',
      img: 'https://picsum.photos/200',
      text:
        'Nam suscipit commodo tristique. Mauris lacinia vulputate purus rutrum dignissim. Nunc tempus leo in urna mollis finibus. Fusce gravida sit amet ante sit amet porta. Nullam vel porta dolor. Etiam feugiat lorem a sollicitudin semper. Pellentesque congue posuere varius.',
      sex: 'male',
      age: 0.8,
    },
  ]);
  const addPets = (name, img, text, sex, age) => {
    setPets([
      ...pets,
      {
        name,
        img,
        text,
        sex,
        age,
      },
    ]);
  };
  const removePets = (id) => {
    setPets(pets.filter((item) => item.name !== id));
  };
  return (
    <PetContext.Provider value={{ pets, addPets, removePets }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
