import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Contact from '../../pages/Contact';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
