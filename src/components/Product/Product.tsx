import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fontSizes, margins, devices, paddings } from "../../theme/theme";
import { productInterface } from "../../interfaces";
import HeartBtn from "../HeartBtn/HeartBtn";
import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";

const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 14rem;
  height: 14rem;
  margin: ${margins.xs};
  border: .7px solid #f0f0f0;
  font-size: ${fontSizes.sm};
  line-height: 1.5rem;
  box-sizing: border-box;

  ${devices.mobile} {
    width: 16rem;
    height: 16rem;
  }
`;

const Thumb = styled.div<{ bg: string }>`
  display: block;
  width: 100%;
  height: 100%;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  padding: 0 ${paddings.sm};
  background-color: rgba(205, 207, 208, .7);
  box-sizing: border-box;
`;

const Price = styled.p`
  font-weight: 700;
`;

const Product: React.FC<{ product: productInterface }> = ({ product }) => {
  const { wishlistValue, setWishlistValue } = useContext(WishlistContext);

  const addToWishlist = (product: productInterface) => {
    !wishlistValue.find((item) => item.id === product.id) &&
      setWishlistValue([...wishlistValue, product]);
  };

  return (
    <ProductCard to={`/product/${product.id}`}>
      <Thumb bg={product.thumbnail} />
      <ProductInfo>
        <p>{product.title}</p>
        <Price>${product.price}</Price>
      </ProductInfo>
      <HeartBtn onClick={() => addToWishlist(product)} />
    </ProductCard>
  );
};

export default Product;
