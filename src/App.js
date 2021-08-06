import React, { useState } from 'react';
import data from './data'
import List from './List'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  AOS.init();
  return (
    <main>
      <section className="container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h3>{data.length} birthdays today 🎉</h3>
        <List people="data" />
      </section>
    </main>
  );
}

export default App;
