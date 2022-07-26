import { Field } from "formik";
import styled from "styled-components";
import { colors, devices, fontSizes, margins } from "../../theme/theme";

const FormInput = styled(Field)`
  width: 15rem;
  height: 3rem;
  font-size: ${fontSizes.md};
  margin-bottom: ${margins.xs};
  border: 1px solid ${colors.lightGray};
  box-sizing: border-box;

  ${devices.mobile} {
    width: 20rem;
  }
`;

export default FormInput;
