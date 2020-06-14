import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import PetCard from '../../components/PetCard/PetCard';
import { PetContext } from '../../context/PetsContext';

const Pets = () => {
  const { pets } = useContext(PetContext);
  return (
    <>
      <Header />
      <Main mainTitle="Omplassering">
        <section className="pets">
          <Heading tag="h3">Adoptere en katt fra oss</Heading>
          <Paragraph>
            I Jekteviken har vi til enhver tid mange store og små katter som
            trenger gode hjem. Vårt Hjelpesenter i Jekteviken 5 er godkjent av
            distriktsveterinær og drives etter forskrifter for godkjent
            dyrepensjonat. I tillegg har vi også puser som av ulike grunner bor
            midlertidig i fosterhjem i påvente av ny eier.
          </Paragraph>

          <div className="pets__grid">
            {pets.map((pet) => (
              <PetCard
                name={pet.name}
                img={pet.img}
                key={pet.name}
                id={pet.name}
              />
            ))}
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Pets;
