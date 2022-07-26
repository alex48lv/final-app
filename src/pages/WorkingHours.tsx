import Categories from "../components/Categories/Categories";
import styled from "styled-components";
import { colors, devices, fontSizes, margins, paddings } from "../theme/theme";

const TableWrapper = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: ${paddings.lg} ${paddings.md};
    background: ${colors.contentBg};
    box-sizing: border-box;

    ${devices.tablet} {
        width: 35rem;
    }

    ${devices.laptop} {
        float: right;
    }
`;

const ContentHeader = styled.h2`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    font-size: ${fontSizes.lg};
    font-weight: bold;
    color: ${colors.contentBg};
    background: ${colors.red};
    text-align: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${devices.tablet} {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;

const Subheader = styled.h3`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-bottom: ${margins.sm};
    font-size: ${fontSizes.md};
    background: ${colors.lightGray};
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: ${paddings.md};
    border: 2px solid ${colors.lightGray};
    border-top: none;
    border-collapse: collapse;
    border-spacing: 0px;
    box-sizing: border-box;

    p {
        font-size: ${fontSizes.md};
        line-height: 2rem;
    }

    span {
        margin-left: ${margins.sm};
        font-size: ${fontSizes.lg};
        font-weight: bold;
    }

    ${devices.tablet} {
        width: 50%;
    }
`;

const ShortTime = styled.span`
    color: ${colors.red};
`;

const WorkingHours: React.FC = () => {
    return (
        <>
            <Categories />
            <TableWrapper>
                <ContentHeader>Darba laiks</ContentHeader>
                <ContentWrapper>
                    <Content>
                        <Subheader>Rīgā</Subheader>
                        <p>Darba dienās <span>8-21</span></p>
                        <p>Sestdienās <ShortTime>8-20</ShortTime></p>
                        <p>Svētdienās <ShortTime>9-18</ShortTime></p>
                    </Content>
                    <Content>
                        <Subheader>Ārpus Rīgas</Subheader>
                        <p>Darba dienās <span>8-20</span></p>
                        <p>Sestdienās <ShortTime>8-19</ShortTime></p>
                        <p>Svētdienās <ShortTime>9-18</ShortTime></p>
                    </Content>
                </ContentWrapper>
            </TableWrapper>
        </>
    );
};

export default WorkingHours;