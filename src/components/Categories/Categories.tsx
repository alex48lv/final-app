import { useContext } from "react";
//import { useQuery } from "react-query";
import styled from "styled-components";
//import DataContext from "../../context/DataContext";
import { colors, paddings } from "../../theme/theme";
import CategoryItem from "./CategoryItem";

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 21rem;
  background: ${colors.contentBg};
`;

const Categories: React.FC = () => {
  /*const { categories, setCategories } = useContext(DataContext);

  const { isLoading } = useQuery("categoryData", () =>
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((stateData) => setCategories(stateData))
  );

  if (isLoading) return <div>loading...</div>;*/

  return (
    <CategoryWrapper>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </CategoryWrapper>
  );
};

export default Categories;
