import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, devices, margins, paddings } from "../../theme/theme";
import smartphones from "../../assets/bg/smartphones.jpg";
import laptops from "../../assets/bg/laptops.jpg";
import fragrances from "../../assets/bg/fragrances.jpg";
import skincare from "../../assets/bg/skincare.jpg";
import groceries from "../../assets/bg/groceries.jpg";
import homeDecoration from "../../assets/bg/home-decoration.jpg";
import furniture from "../../assets/bg/furniture.jpg";
import tops from "../../assets/bg/tops.png";
import womenDress from "../../assets/bg/women-dress.jpg";
import womenShoes from "../../assets/bg/women-shoes.jpg";
import menShirts from "../../assets/bg/men-shirts.jpg";
import menShoes from "../../assets/bg/men-shoes.jpg";

const bgImages = [
    {
        id: 1,
        img: smartphones,
        title: "slide one",
        url: "/slide1",
    },
    {
        id: 2,
        img: laptops,
        title: "slide two",
        url: "/slide2",
    },
    {
        id: 3,
        img: fragrances,
        title: "slide three",
        url: "/slide3",
    },
    {
        id: 4,
        img: skincare,
        title: "slide four",
        url: "/slid4",
    },
    {
        id: 5,
        img: groceries,
        title: "slide five",
        url: "/slide5",
    },
    {
        id: 6,
        img: homeDecoration,
        title: "slide six",
        url: "/slide6",
    },
    {
        id: 7,
        img: furniture,
        title: "slide seven",
        url: "/slide7",
    },
    {
        id: 8,
        img: tops,
        title: "slide eight",
        url: "/slide8",
    },
    {
        id: 9,
        img: womenDress,
        title: "slide nine",
        url: "/slide9",
    },
    {
        id: 10,
        img: womenShoes,
        title: "slide ten",
        url: "/slide10",
    },
    {
        id: 11,
        img: menShirts,
        title: "slide eleven",
        url: "/slide11",
    },
    {
        id: 12,
        img: menShoes,
        title: "slide twelve",
        url: "/slide12",
    },
];

const Card = styled(Link)/*<{ bg: string }>*/`
    position: relative;
    width: 14rem;
    height: 14rem;
    margin: ${margins.xs};
    padding: 0 ${paddings.sm};
    border: .7px solid #f0f0f0;
    background: ${colors.bg};
    line-height: 2.5rem;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;

    ${devices.mobile} {
        width: 16rem;
        height: 16rem;
    }
`;

const CardTitle = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2rem;
    background-color: rgba(205, 207, 208, .7);

    span {
        font-weight: bold;
        text-transform: capitalize;
    }
`;

const CategoryCard: React.FC<{ category: string }> = ({ category }) => {
    return (
        <Card to={`/category/${category}`}>
            <CardTitle>
                <span>{category}</span>
            </CardTitle>
        </Card>
    );
};
  
export default CategoryCard;

    //background: url(${(props) => props && props.bg}) center/contain no-repeat;