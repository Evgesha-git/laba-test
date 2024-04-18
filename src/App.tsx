import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import HowWork from './components/HowWork';
import Rewiews from './components/Rewiews';
import Faq from './components/Faq';
import Mut from './components/Mut';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Title />
        <HowWork />
        <Rewiews />
        <Faq />
        <Mut />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
