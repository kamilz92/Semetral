import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import LinkCards from '../../components/LinkCard/LinkCards';
import Main from '../../components/Main/Main';
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <LinkCards />
      <Main mainTitle="Nyheter">
        <News />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
