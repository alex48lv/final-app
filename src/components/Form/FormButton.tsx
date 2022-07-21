import styled from "styled-components";
import { colors, fontSizes } from "../../theme/theme";

const FormBtn = styled.button`
  width: 100%;
  height: 3rem;
  font-size: ${fontSizes.md};
  font-weight: 700;
  background: ${colors.red};
  color: ${colors.contentBg};
  letter-spacing: .8px;
`;

export default FormBtn;
