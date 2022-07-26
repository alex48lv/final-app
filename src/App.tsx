import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataContext from './components/context/DataContext';
import SideBarContext from './components/context/SideBarContext';
import WishlistContext from './components/context/WishlistContext';
import Nav from './components/Nav/Nav';
import PageContent from './components/PageContent/PageContent';
import SideBar from './components/SideBar/SideBar';
import Wishlist from './pages/Wishlist';
import GlobalStyle from './GlobalStyle';
import Auth from './pages/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import WorkingHours from './pages/WorkingHours';
import Cart from './pages/Cart';
import CartContext from './components/context/CartContext';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [wishlistValue, setWishlistValue] = useState([]);
  const [cartValue, setCartValue] = useState([]);

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <CartContext.Provider value={{ cartValue, setCartValue }}>
          <WishlistContext.Provider value={{ wishlistValue, setWishlistValue }}>
            <DataContext.Provider value={{ categories, setCategories }}>
              <BrowserRouter>
                <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
                  <Nav />
                  {isSideBarOpen && <SideBar />}
                </SideBarContext.Provider>
                <PageContent>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/working-hours" element={<WorkingHours />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="category/:categoryName" element={<Category />}/>
                    <Route path="/product/:productId" element={<ProductPage />}/>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageContent>
              </BrowserRouter>
            </DataContext.Provider>
          </WishlistContext.Provider>
        </CartContext.Provider>
      </QueryClientProvider>
    </>

  );
}

export default App;
