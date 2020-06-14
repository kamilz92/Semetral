import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import './about.scss';

const About = () => (
  <>
    <Header />
    <Main mainTitle="Om oss">
      <section className="about">
        <Heading tag="h3">HVEM ER VI?</Heading>
        <Paragraph>
          Dyrebeskyttelsen Bergen (etablert 1862) er Norges eldste, selvstendige
          dyrevernorganisasjon som har drevet sammenhengende dyrevern siden den
          startet.
        </Paragraph>
        <Paragraph>
          Vårt arbeid er basert på frivillige krefter, og vi mottar ingen fast
          offentlig støtte. Det er derfor bidrag fra dyrevenner som gjør at vi
          klarer å opprettholde arbeidet for dyrene. Et aktivt styre i
          Dyrebeskyttelsen Bergen jobber hele tiden med å få inntekter og støtte
          fra ulike fond til det omfattende arbeidet med hjemløse dyr. Vårt
          hjelpesenter i Jekteviken 5 står helt sentralt i vårt arbeid, og er
          viktig å drifte på en god måte. Alle inntekter fra markedsdager og
          andre inntektsgivende aktiviteter går uavkortet til driften av
          hjelpesenteret. Senteret er godkljent av distriktsveterinærer og
          Mattilsynet.
        </Paragraph>
        <Paragraph>
          Alle adminstrative arbeidsoppgaver i organisasjonen ivaretas av
          styrets medlemmer. Alle trykksaker, rapporter, plakater, julekort og
          ulike effekter produseres internt. Tilsammen gir dette en stor
          økonomisk besparelse.
        </Paragraph>
        <Paragraph>
          Dyrebeskyttelsen Bergen mener at vi mennesker har etiske forpliktelser
          overfor dyr. Dyr har egenverdi og skal ikke bare vurderes ut fra den
          nytteverdien de måtte ha for oss mennesker.
        </Paragraph>
        <Paragraph>
          Ledelsen i Dyrebeskyttelsen Bergen består at et styre, valgt av
          årsmøtet 2017.
        </Paragraph>
        <Heading tag="h4">Styret består av:</Heading>
        <ul className="about__list">
          <li className="about__item">Liv Sandal, leder, kasserer</li>
          <li className="about__item">Jonveig Johnsen, nestleder</li>
          <li className="about__item">Penny Lee Liebig, Styremedlem</li>
          <li className="about__item">Cheryl Whitmore, Styremedlem</li>
          <li className="about__item">Torill Vindenes, Styremedlem</li>
          <li className="about__item">Irene Bjorøy Wiig, Styremedlem</li>
          <li className="about__item">Mitra Bemanian, Styremedlem</li>
        </ul>
        <Heading tag="h4">Valgkomiteen:</Heading>
        <ul className="about__list">
          <li className="about__item">Anja Johnsen, leder</li>
          <li className="about__item">Advokat Nils E. Tangedal, nestleder</li>
          <li className="about__item">Janicke Marshall, medlem</li>
        </ul>
      </section>
    </Main>
    <Footer />
  </>
);

export default About;
