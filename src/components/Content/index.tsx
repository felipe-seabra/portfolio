import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Contact from '../../pages/Contact';
import Thanks from '../../pages/Thanks';
import Sorry from '../../pages/Sorry';
import Projects from '../../pages/Projects';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/error" element={<Sorry />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
