import styled from "styled-components";
import { colors, paddings } from "../../theme/theme";

const FormLabel = styled.label`
    position: absolute;
    top: -7px;
    left: 20px;
    color: ${colors.lightGray};
    padding: 0 ${paddings.xs};
    background: ${colors.contentBg};
`

export default FormLabel;