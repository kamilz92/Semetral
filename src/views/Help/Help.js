import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';

const Help = () => (
  <>
    <Header />
    <Main mainTitle="Hjelp">
      <section className="help">
        <Heading tag="h3">Fjernadopsjon</Heading>
        <Paragraph bold>
          Dyrebeskyttelsen Bergen sitt fjernadopsjonsprogram er inne i sitt 24.
          år (9. januar 1996).
        </Paragraph>
        <Paragraph>
          Fjernadopsjonsprogrammet er en unik måte å hjelpe på i det omfattende
          prosjektet for hjemløse og nødstilte katter. Dyrebeskyttelsen Bergen
          kunne ikke klart å hjelpe så mange dyr uten økonomisk støtte fra faste
          givere. Ved å delta i fjernadopsjonsprogrammet er du med på å drive
          vårt dyrevernsarbeid, som inntak og adopsjon av hjemløse katter, drift
          av foringsstasjoner og veterinærbehandling av dyr i nød.
        </Paragraph>
        <Paragraph>
          Som fjernadopsjonsforelder vil du får tilsendt 2 halvårsrapporter
          henholdsvis i juni og desember. I rapportene får du grundig
          informasjon om de ulike kattene og generelt hvordan tilstanden er både
          på våre utekattstasjoner og i vårt hjelpesenter i Jekteviken. Nedenfor
          kan du lese en halvårsrapport fra høsten 2019 og få et lite innblikk i
          hva vi driver med på et daglig basis.
        </Paragraph>
        <Paragraph>
          VELKOMMEN - DIN hjelp kan være avgjørende for en av de hjelpetrengende
          kattene.
        </Paragraph>
        <Paragraph>
          Dersom du ønsker å støtte vårt viktige hjelpeprogram, så send en mail
          til jonveig@dyrebeskyttelsen-bergen.no
        </Paragraph>
        <Heading tag="h3">Fjernadopsjon</Heading>
        <Paragraph>
          På vårt senter for hjemløse katter i Jekteviken 5 på Nøstet har vi til
          enhver tid et stort antall små og store dyr som trenger daglig stell,
          kos, lek og sosialisering. Vi har behov for frivillige både på dagtid,
          ettermiddag/kveld og i helgene.
        </Paragraph>
        <Paragraph>
          Arbeidet i Jekteviken omfatter alt fra stell av dyrene, rengjøring av
          lokalene og fremfor alt - tilbringe mye tid med kattene. Det siste er
          den aller viktigste oppgaven for våre frivillige.
        </Paragraph>
        <Paragraph>
          Vi har mange skjønne dyr som trenger kos, oppmerksomhet og menneskelig
          kontakt.
        </Paragraph>
        <Paragraph>
          Våre frivillige favner alle aldersgrupper, fra studenter som tar med
          seg pensum ned i Jekteviken og leser til eksamen med en pus på fanget,
          til nybakte pensjonister som er med på å sosialisere katter med
          spesielle behov.
        </Paragraph>
        <Paragraph>
          Du trenger ikke forplikte deg til noe. Det er bare å droppe innom når
          det passer en ettermiddag mellom 17-20 og spørre etter vakthavende. Vi
          kan svare på eventuelle spørsmål du måtte ha.
        </Paragraph>
        <Paragraph bold>Hjertelig velkommen!</Paragraph>
      </section>
    </Main>
    <Footer />
  </>
);

export default Help;
