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
import CategoryCard from "./CategoryCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useQuery } from "react-query";
/*
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
];*/

const CategoryCards: React.FC = () => {
  const { categories, setCategories } = useContext(DataContext);

  const { isLoading } = useQuery("categoryData", () =>
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((stateData) => setCategories(stateData))
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {categories.slice(0, 12).map((category: string, index: number) => {
        return <CategoryCard key={index} category={category} id={index} />;
      })}
    </>
  );
};

export default CategoryCards;
