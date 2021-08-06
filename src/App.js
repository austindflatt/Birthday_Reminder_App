import React, { useState } from 'react';
import data from './data'
import List from './List'
import './App.css';

function App() {
  return (
    <main>
      <section class="container">
        <h3>
          <List />
        </h3>
      </section>
    </main>
  );
}

export default App;
