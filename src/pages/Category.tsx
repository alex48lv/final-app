import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Categories from "../components/Categories/Categories";
import Product from "../components/Product/Product";
import { categoryData } from "../interfaces";
import { colors, paddings } from "../theme/theme";

const CategoryWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${paddings.md} ${paddings.sm};
  background: ${colors.contentBg};
`;

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const [productData, setProductData] = useState<categoryData | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [categoryName]);

  return (
    <>
      <Categories />
      <CategoryWrapper>
        {productData ? (
          productData.products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        ) : (
          <div>loading ...</div>
        )}
      </CategoryWrapper>
    </>
  );
};

export default Category;
