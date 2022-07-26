import { useContext } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import DataContext from "../context/DataContext";
import { colors, devices, margins } from "../../theme/theme";
import CategoryItem from "./CategoryItem";

const CategoryWrapper = styled.div`
  display: none;
  flex-direction: column;
  float: left;
  width: 21rem;
  margin-right: ${margins.md};
  background: ${colors.contentBg};
  box-sizing: border-box;

  ${devices.laptop} {
    display: flex;
  }
`;

const Categories: React.FC = () => {
  const { categories, setCategories } = useContext(DataContext);

  const { isLoading } = useQuery("categoryData", () =>
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((stateData) => setCategories(stateData))
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <CategoryWrapper>
      {categories.map((category: string, index: number) => {
        return <CategoryItem key={index} category={category} />;
      })}
    </CategoryWrapper>
  );
};

export default Categories;
