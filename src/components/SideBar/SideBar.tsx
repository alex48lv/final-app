import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colors,
  devices,
  margins,
  paddings,
  zIndexes,
} from "../../theme/theme";

import xIcon from "../../assets/icons/icon-x.svg";
import { useContext } from "react";
import SideBarContext from "../context/SideBarContext";
import DataContext from "../context/DataContext";
import userIcon from "../../assets/icons/icon-person.svg";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";
import clocksIcon from "../../assets/icons/clocks-icon.svg";
import WishlistContext from "../context/WishlistContext";

const NavBackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 8rem;
  background: rgba(0, 0, 0, 0.3);
  z-index: ${zIndexes.sideBar};

  ${devices.tablet} {
    top: 4rem;
  }
`;

const NavContent = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background: ${colors.bg};
  z-index: ${zIndexes.sideBar};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};

  ${devices.mobile} {
    width: 90%;
    max-width: 20rem;
  }

  ${devices.laptop} {
    display: none;
  }
`;

const CategoryHeader = styled.div`
  display: block;
  width: 100%;
  height: 3rem;
  padding-left: ${paddings.sm};
  font-weight: 700;
  line-height: 3rem;
`;

const CategoryWrapper = styled.div`
  height: calc(100vh - 8rem);
  width: 100%;
  overflow-y: auto;
`;

const CategoryNavItem = styled(Link)`
  width: 100%;
  height: 4rem;
  background-color: ${colors.bg};
  display: block;
  border: 1px solid ${colors.lightGray};
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  line-height: 4rem;
  box-sizing: border-box;
`;

const NavItem = styled(CategoryNavItem)`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: ${paddings.md};
  text-align: initial;
`;

const NavIcon = styled.div<{ icon: string }>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: url(${(props) => props && props.icon}) center/contain no-repeat;
`;

const LinkText = styled.div`
  display: inline-block;
  margin-left: ${margins.sm};
`;

const ItemCount = styled.span`
  position: absolute;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  top: 2rem;
  left: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: ${colors.contentBg};
  background: ${colors.red};
  border-radius: 50%;
  line-height: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: ${margins.xs};
  width: 2rem;
  height: 2rem;
  background: url(${xIcon}) center/contain no-repeat;
  filter: invert(100%);
`;

const SideBar: React.FC = () => {
  const { setIsSideBarOpen } = useContext(SideBarContext);
  const { categories } = useContext(DataContext);
  const { wishlistValue } = useContext(WishlistContext);

  return (
    <NavBackDrop>
      <CloseButton onClick={() => setIsSideBarOpen(false)} />
      <NavContent>
        <NavItem to="/auth" onClick={(): void => { setIsSideBarOpen(false) }}>
          <NavIcon icon={userIcon} />
          <LinkText>Ieiet vai reģistrēties</LinkText>
        </NavItem>
        <NavItem to="/wishlist" onClick={() => setIsSideBarOpen(false)} >
          {wishlistValue.length > 0 && <ItemCount>{wishlistValue.length}</ItemCount>}
          <NavIcon icon={heartIcon} />

          <LinkText>Vēlmju saraksts</LinkText>
        </NavItem>
        <NavItem to="/working-hours" onClick={() => setIsSideBarOpen(false)} >
          <NavIcon icon={clocksIcon} />
          <LinkText>Darba laiks</LinkText>
        </NavItem>
        <CategoryHeader>Preču kategorijas:</CategoryHeader>
        <CategoryWrapper>
          {categories ? (
            <>
              {categories.map((category: string, index) => {
                return (
                  <CategoryNavItem key={index} to={`category/${category}`} onClick={() => setIsSideBarOpen(false)}>
                    {category}
                  </CategoryNavItem>
                );
              })}
            </>
          ) : (
            <div>loading ... </div>
          )}
        </CategoryWrapper>
      </NavContent>
    </NavBackDrop>
  );
};

export default SideBar;
