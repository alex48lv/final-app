import Categories from "../components/Categories/Categories";
import styled from "styled-components";
import { colors, margins, paddings } from "../theme/theme";

const HeroCategories = styled.div`
    display: block;
    float: right;
    min-width: 50%;
    min-height: 50rem;
    margin: ${margins.lg};
    padding: ${paddings.lg} ${paddings.md};
    background: ${colors.contentBg};
`;

const Home: React.FC = () => {
    return (
        <><Categories /><HeroCategories /></>
    );
};

export default Home;