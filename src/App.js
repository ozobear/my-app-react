import React from 'react';
import MyInfo from './components/MyInfo';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import ContanctCard from './components/ContactCard';
// import contactsData from './components/contactsData';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* <MyInfo /> */}
      <NavBar />
      <MainContent />
      <ContanctCard
      info={
        {
          name: "Felix",
          imgUrl: "http://placekitten.com/300/200",
          phone: "1112-3323-122",
          email: "felix@gmail.com"
        }
      }
      />
      <ContanctCard
      info={
        {
          name: "Felix",
          imgUrl: "http://placekitten.com/400/200",
          phone: "1112-3323-122",
          email: "felix@gmail.com"
        }
      }
      />
      <ContanctCard
      info={
        {
          name: "Felix",
          imgUrl: "http://placekitten.com/400/300",
          phone: "1112-3323-122",
          email: "felix@gmail.com"
        }
      }
      />
      <Footer />
    </div>
  );
}

export default App;
