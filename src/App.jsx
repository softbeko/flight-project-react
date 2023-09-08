import React from 'react';
import Navbar from './components/header/navbar/navbar';
import Search from './components/header/search/search';
import Body from './components/body/body';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Body />
    </div>
  );
}

export default App;
