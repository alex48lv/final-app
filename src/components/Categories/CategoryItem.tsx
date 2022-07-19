import styled from "styled-components";

import { Link } from "react-router-dom";
import { colors, paddings } from "../../theme/theme";

const Item = styled(Link)`
  width: 100%;
  height: 2.5rem;
  padding: 0 ${paddings.sm};
  border: .5px solid #f0f0f0;
  line-height: 2.5rem;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    color: ${colors.contentBg};
    background: ${colors.red};
    text-decoration: underline;
  }
`;

const CategoryItem: React.FC<{ category: string }> = ({ category }) => {
  return <Item to={`/category/${category}`}>{category}</Item>;
};

export default CategoryItem;
