import React from 'react';
import NewsArticle from './NewsArticle';
import './news.scss';

const News = () => (
  <section className="news">
    <NewsArticle
      titel="Korecki dobre"
      date="21.21.1231"
      img="https://picsum.photos/id/237/200/300"
      text="I Jekteviken har vi til enhver tid mange store og små katter som trenger gode hjem. Vårt Hjelpesenter i Jekteviken 5 er godkjent av distriktsveterinær og drives etter forskrifter for godkjent dyrepensjonat. I tillegg har vi også puser som av ulike grunner bor midlertidig i fosterhjem i påvente av ny eier."
    />
    <NewsArticle
      titel="Pieski dobre"
      date="21.21.1231"
      img="https://picsum.photos/id/237/200/300"
      text="Det koster å drive dyrevern, og dyrene får all den veterinærbehandling de trenger når de blir tatt i Dyrebeskyttelsen Bergen sin varetekt. Når kattene kommer til vårt hjelpesenter i Jekteviken blir de vaksinert. Dersom katten blir hos oss i mer enn 4 uker får den en revaksine. Både kattunger og voksne katter får 2-3 ormekurer. Dersom katten får nytt hjem før den har fått alle vaksiner og ormekurer, vil ny eier få med seg ekstra ormekur, og vi gjør en avtale om at man kommer tilbake for den siste vaksinen (gratis)."
    />
    <NewsArticle
      titel="Fajne zwierzaki"
      date="21.21.1231"
      img="https://picsum.photos/id/237/200/300"
      text="Katter som ankommer Dyrebeskyttelsen Bergen i voksen alder har svært forskjellig helsestatus og den medisinske behandlingen de mottar avhenger deretter. Alle katter gjennomgår en grundig helsesjekk og behandles etter behov.
    Katter som har gått hjemløs blir testet for FIV (Feline immunodeficiency virus/ Kattens immunsviktvirus) og FeLV (Felint Leukemi virus). FIV er et virus hos katter som minner om HIV hos mennesker, men viruset kan ikke smitte til mennesker. FeLV er et virus som angriper beinmargen og de hvite blodcellene."
    />
  </section>
);

export default News;
