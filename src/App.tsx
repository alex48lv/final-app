import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataContext from './components/context/DataContext';
import Nav from './components/Nav/Nav';
import PageContent from './components/PageContent/PageContent';
import GlobalStyle from './GlobalStyle';
import Auth from './pages/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <DataContext.Provider value={{ categories, setCategories }}>
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
        </DataContext.Provider>
      </QueryClientProvider>
    </>

  );
}

export default App;
