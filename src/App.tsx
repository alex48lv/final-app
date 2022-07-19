import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav/Nav';
import PageContent from './components/PageContent/PageContent';
import GlobalStyle from './GlobalStyle';
import Auth from './pages/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <PageContent>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageContent>
      </BrowserRouter>
    </>

  );
}

export default App;
