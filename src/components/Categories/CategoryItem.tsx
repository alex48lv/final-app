import styled from "styled-components";
import rightIcon from "../../assets/icons/icon-arrow-r.svg"
import { Link } from "react-router-dom";
import { colors, paddings } from "../../theme/theme";

const Item = styled(Link)`
  position: relative;
  width: 100%;
  height: 2.5rem;
  padding: 0 ${paddings.sm};
  border: .5px solid #f0f0f0;
  line-height: 2.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  box-sizing: border-box;

  &:hover {
    color: ${colors.contentBg};
    background: ${colors.red};
    text-decoration: underline;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
  width: .6rem;
  height: .6rem;
  background: url(${rightIcon}) center/contain no-repeat;
`;

const CategoryItem: React.FC<{ category: string }> = ({ category }) => {
  return (
    <Item to={`/category/${category}`}>
      {category}
      <Arrow />
    </Item>
  );
};

export default CategoryItem;
