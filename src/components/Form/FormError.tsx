import { ErrorMessage } from "formik";
import styled from "styled-components";
import { colors, paddings } from "../../theme/theme";

const StyledError = styled(ErrorMessage)`
  display: block;
  height: 1.25rem;
  padding: ${paddings.xs};
  color: ${colors.red};
  background: ${colors.error};
  text-align: left;

  FormInput {
    border-color: ${colors.red};
  }
`;

const FormError: React.FC<{ name: string }> = ({ name }) => (
  <StyledError name={name} component="span" />
);

export default FormError;
