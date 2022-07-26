import styled from "styled-components";
import { devices, paddings } from "../../theme/theme";

const PageContentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: start;
  width: 100%;
  margin: 9rem 0 0;
  padding: 0 ${paddings.sm};
  min-height: calc(100vh - 10rem);
  box-sizing: border-box;
  /* border: 1px solid #ff0ff0; */

  ${devices.tablet} {
    min-height: calc(100vh - 12rem);
    max-width: 80rem;
    padding: 0 ${paddings.lg};
    margin: 5.5rem auto 0;
  }
`;

const PageContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PageContentContainer>{children}</PageContentContainer>;
};

export default PageContent;
