import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import usePresistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { Background } from './components/Background/Background';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppContextProvider } from './context/Provider';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [persisted, setPersisted] = usePresistedState(dark.title);
  const [theme, setTheme] = useState(persisted === 'light' ? light : dark);

  const toggleTheme = () => {
    setTheme(persisted === 'light' ? dark : light);
    setPersisted(persisted === 'light' ? dark.title : light.title);
  };

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
            <main>
              <Content />
              <Background />
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
