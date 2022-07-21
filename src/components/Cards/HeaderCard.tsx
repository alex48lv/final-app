import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DataContext from "../context/DataContext";
import ImgContext from "../context/ImgContext";

const Card = styled.div<{ bg: string }>`
    display: block;
    min-width: 25rem;
    max-width: 30rem;
    background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const HeaderCard: React.FC = () => {
    const { imgs, setImgs } = useContext(ImgContext);
    const [currentImage, setCurrentImage] = useState(0);

    const { data } = useQuery("categoryData", () =>
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((stateData) => setImgs(stateData))
    );

    return (
        <>
            {imgs.map((image: string, index: number) => {
                return <Card key={index} bg={image} />;
            })}
        </>
    );
};

export default HeaderCard;