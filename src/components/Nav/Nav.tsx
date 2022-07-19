import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
//import { useContext, useEffect, useState } from "react";

import {
  colors,
  devices,
  fontSizes,
  margins,
  paddings,
  zIndexes,
} from "../../theme/theme";
//import SideBarContext from "../../context/SideBarContext";
//import CartContext from "../../context/CartContext";
//import { categoryData } from "../../interfaces";
//import DataContext from "../../context/DataContext";
import menuIcon from "../../assets/icons/icon-menu.svg";
import userIcon from "../../assets/icons/icon-person.svg";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";
import clocksIcon from "../../assets/icons/clocks-icon.svg";
import bagIcon from "../../assets/icons/icon-bag-empty.svg";
import fullBagIcon from "../../assets/icons/icon-bag-full.svg";
import searchIcon from "../../assets/icons/icon-search.svg";
import logoImage from "../../assets/icons/icon-menu.svg";

const StyledNav = styled.header`

  width: 100%;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background: ${colors.contentBg};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: ${paddings.sm};
`;

const HalfNavMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const BurgerBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  background: url(${menuIcon}) center no-repeat;
  
  ${devices.mobile} {
    display: none;
  }
`;

const NavActionWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link) <{ icon: string }>`
  display: inline-flex;
  align-items: center;
  min-width: 1.5rem;
  height: 1.5rem;
  margin-left: ${margins.md};
  background: url(${(props) => props && props.icon}) left/contain no-repeat;
  text-decoration: none;
`;

const LinkText = styled.div`
  display: inline-block;
  width: 5rem;
  margin-left: ${margins.lg};

  &:hover {
    color: ${colors.red};
  }
`;

const CartLink = styled(StyledLink)`
  position: relative;

  span {
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    text-align: center;
    position: absolute;
    color: ${colors.bg};
  }
`;

const SearchFieldWrapper = styled.div`
  position: relative;
  min-width: 1.5rem;
  height: 100%;
  margin-left: ${margins.sm};

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    right: 8px;
    top: 6px;
    background: url(${searchIcon}) center/contain no-repeat;
    z-index: ${zIndexes.sideBar};
  }
`;

const SearchField = styled.input`
  display: none;
  position: relative;
  height: 2rem;
  padding: 0 ${paddings.xs};
  border: 1px solid ${colors.darkBlue};
  border-radius: 4px;
  box-sizing: border-box;

  ${devices.mobile} {
    display: inline-block;
  }
`;

const CategoryMenu = styled.div`
  display: none;
  width: 100%;
  height: 2rem;
  position: absolute;
  top: 4rem;
  justify-content: center;
  background: ${colors.lightBlue};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};

  ${devices.tablet} {
    display: flex;
  }
`;

const CategoryLink = styled(Link)`
  width: 8rem;
  height: 100%;
  border-right: 1px solid ${colors.bg};
  text-decoration: none;
  color: ${colors.darkBlue};
  font-size: ${fontSizes.xs};
  text-align: center;
  line-height: 2rem;
  text-transform: uppercase;

  &:nth-child(1) {
    border-left: 1px solid ${colors.bg};
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Nav: React.FC = () => {
  //const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);
  //const { cartValue } = useContext(CartContext);
  //const { categories } = useContext(DataContext);

  return (
    <>
      <StyledNav>
        <ContentContainer>
        <HalfNavMenu>
          <BurgerBtn />
          <StyledLink to="/" icon={logoImage} />
          <SearchFieldWrapper>
            <SearchField type="text" placeholder="Meklēt" />
          </SearchFieldWrapper>
        </HalfNavMenu>
        <HalfNavMenu>
          <NavActionWrapper>
            <StyledLink to="/auth" onClick={(): void => { }} icon={userIcon}><LinkText>Ieiet vai reģistrēties</LinkText></StyledLink>
            <StyledLink to="/wishlist" icon={heartIcon}><LinkText>Vēlmju saraksts</LinkText></StyledLink>
            <StyledLink to="/workingHours" icon={clocksIcon}><LinkText>Darba laiks</LinkText></StyledLink>
          </NavActionWrapper>
          <CartLink to="/cart" icon={bagIcon}><LinkText>Iepirkumu grozs</LinkText></CartLink>
        </HalfNavMenu>
        </ContentContainer>
      </StyledNav>
    </>
  );
};

export default Nav;
