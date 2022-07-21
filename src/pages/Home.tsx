import Categories from "../components/Categories/Categories";
import styled from "styled-components";
import { colors, margins, paddings } from "../theme/theme";
import { productInterface } from "../interfaces";
import { useQuery } from "react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderCard from "../components/Cards/HeaderCard";

const HeroCategories = styled.div`
    display: block;
    float: right;
    min-width: 50%;
    min-height: 50rem;
    padding: ${paddings.lg} ${paddings.md};
    background: ${colors.contentBg};
`;

const CategoryHeader = styled.div`
    display: flex;
    width: 100%;
`;

const MainContent = styled.div`
    display: flex;
    width: 100%;
`;
/*
const Arrow = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  right: 1rem;
  background: url(${rightIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
  width: 2rem;
  height: 2rem;

  ${(props) =>
        props &&
        props.left &&
        `
    left: 1rem;
    background: url(${leftIcon}) rgba(249, 247, 247, 0.5) center/contain no-repeat;
    right: unset;
  `}
`;
*/
const Home: React.FC = () => {/*
    const { productId } = useParams();
    const [currentImage, setCurrentImage] = useState(0);
    
    const { data } = useQuery("categoryData", () =>
        fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
            res.json()
        ).then(console.log)
    );

    const prevHandler = () => {
        data &&
            setCurrentImage(
                currentImage > 0 ? currentImage - 1 : data.images.length - 1
            );
    };

    const nextHandler = () => {
        data &&
            setCurrentImage(
                currentImage === data.images.length - 1 ? 0 : currentImage + 1
            );
    };
*/
    return (
        <>
            <Categories />
            <HeroCategories>
                <CategoryHeader>
                    <HeaderCard />
                </CategoryHeader>
            </HeroCategories>
        </>
    );
};

export default Home;