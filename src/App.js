import React from 'react';
import MyInfo from './components/MyInfo';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import ContanctCard from './components/ContactCard';
import contactsData from './components/contactsData';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* <MyInfo /> */}
      <NavBar />
      <MainContent />
      <ContanctCard info={contactsData[0]} />
      <ContanctCard info={contactsData[1]} />
      <ContanctCard info={contactsData[2]} />
      <ContanctCard info={contactsData[3]} />
      <Footer />
    </div>
  );
}

export default App;
