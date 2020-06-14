import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';

const Contact = () => (
  <>
    <Header />
    <Main mainTitle="Kontakt oss">
      <section className="contact">
        <Heading tag="h3">
          KONTAKTINFORMASJON FOR DYREBESKYTTELSEN BERGEN
        </Heading>
        <Paragraph>Besøksadresse:</Paragraph>
        <Paragraph>
          Jekteviken 5, på Nøstet - like ved den nye Hurtigruteterminalen (se
          kart)
        </Paragraph>
        <Paragraph>
          Åpent for besøkende mandag til torsdag fra kl. 17-20, lørdag 13-16
          OBS, se tekst nedenfor:
        </Paragraph>
        <Paragraph>
          Vårt senter i Jekteviken vil fortsatt være stengt for besøkende i en
          lengre periode. Men... Vi åpner opp for vårt lille butikkhjørne i
          Jekteviken, slik at det er mulighet for å handle hos oss :
        </Paragraph>
        <span className="contact__important">
          Vårt senter i Jekteviken vil fortsatt være stengt for besøkende i en
          lengre periode. Men... Vi åpner opp for vårt lille butikkhjørne i
          Jekteviken, slik at det er mulighet for å handle hos oss :
        </span>
        <Paragraph>
          MEN…det er absolutt mulighet å ta kontakt med oss på mail
        </Paragraph>
        <Paragraph>post@dyrebeskyttelsen-bergen.no</Paragraph>
        <Paragraph>
          På nettsiden her har vi lagt ut alle våre nydelige katter, som har sin
          egen historie og som er klar for et nytt liv hos sin egen familie.
          Dersom du ønsker å adoptere en katt fra oss, send oss en mail, og så
          kan det lages en time for adopsjonsintervju i Jekteviken 5, og
          eventuelt besøk av kattene. Våre ansvarlige vakter i Jekteviken ordner
          det praktiske ifht eventuell adopsjon.
        </Paragraph>
      </section>
    </Main>
    <Footer />
  </>
);

export default Contact;
