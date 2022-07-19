import styled from "styled-components";

import { Link } from "react-router-dom";
import { colors, margins, paddings } from "../../theme/theme";

const Item = styled(Link)`
  width: 100%;
  height: 2.5rem;
  padding: 0 ${paddings.sm};
  color: ${colors.darkBlue};
  border: .5px solid #f0f0f0;
  line-height: 2.5rem;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;

const CategoryItem: React.FC = () => {
  return <Item to={`/category`}>Category</Item>;
};

export default CategoryItem;
