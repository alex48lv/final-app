import Categories from "../components/Categories/Categories";
import styled from "styled-components";
import { colors, devices, margins, paddings } from "../theme/theme";
import HeaderCards from "../components/Cards/HeaderCards";
import CategoryCards from "../components/Cards/CategoryCards";

const HeroCategories = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 50rem;
  padding: ${paddings.md} ${paddings.sm};
  background: ${colors.contentBg};
`;

const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 12rem;
  margin-bottom: ${margins.sm};

  ${devices.mobile} {
    height: 18rem;
  }

  ${devices.tablet} {
    flex-direction: row;
    height: 9rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
const Home: React.FC = () => {
  /*
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
          <HeaderCards />
        </CategoryHeader>
        <MainContent>
          <CategoryCards />
        </MainContent>
      </HeroCategories>
    </>
  );
};

export default Home;
