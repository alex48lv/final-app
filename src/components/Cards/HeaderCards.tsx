import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import slide1 from "../../assets/slide/slide1.jpg";
import slide2 from "../../assets/slide/slide2.jpg";
import slide3 from "../../assets/slide/slide3.jpg";
import slide4 from "../../assets/slide/slide4.jpg";
import slide5 from "../../assets/slide/slide5.jpg";
import slide6 from "../../assets/slide/slide6.jpg";
import { colors, devices, margins } from "../../theme/theme";
import leftIcon from "../../assets/icons/icon-arrow-l.svg";
import rightIcon from "../../assets/icons/icon-arrow-r.svg";

const sliderData = [
  {
    id: 1,
    img: slide1,
    url: "/slide1",
  },
  {
    id: 2,
    img: slide2,
    url: "/slide2",
  },
  {
    id: 3,
    img: slide3,
    url: "/slide3",
  },
  {
    id: 4,
    img: slide4,
    url: "/slid4",
  },
  {
    id: 5,
    img: slide5,
    url: "/slide5",
  },
  {
    id: 6,
    img: slide6,
    url: "/slide6",
  },
];

const Card = styled.div`
  position: relative;
  display: flex;
  width: 15rem;
  height: 50%;
  margin: ${margins.xs} auto;
  box-sizing: border-box;

  ${devices.mobile} {
    width: 22rem;
  }

  ${devices.tablet} {
    width: 50%;
    height: 100%;
    margin: 0 ${margins.xs};
  }
`;

const Slide = styled(Link)<{ bg: string }>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: url(${(props) => props && props.bg}) center/contain no-repeat;
`;

const Arrow = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  right: 1rem;
  background: url(${rightIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  ${(props) =>
    props &&
    props.left &&
    `
    left: 1rem;
    background: url(${leftIcon}) rgba(249, 247, 247, 0.5) center/contain no-repeat;
    right: unset;
  `}
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderButton = styled.div<{ isCurrent?: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  margin-left: ${margins.md};
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${colors.contentBg};
  background-color: ${(props) =>
    props && props.isCurrent ? "red" : colors.contentBg};
`;

const HeaderCards: React.FC = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(3);

  const prevHandler1 = () => {
    setCurrentSlide1(
      currentSlide1 > 0 ? currentSlide1 - 1 : sliderData.length - 4
    );
  };

  const nextHandler1 = () => {
    setCurrentSlide1(
      currentSlide1 === sliderData.length - 4 ? 0 : currentSlide1 + 1
    );
  };

  const prevHandler2 = () => {
    setCurrentSlide2(
      currentSlide2 > 3 ? currentSlide2 - 1 : sliderData.length - 1
    );
  };

  const nextHandler2 = () => {
    setCurrentSlide2(
      currentSlide2 === sliderData.length - 1 ? 3 : currentSlide2 + 1
    );
  };

  return (
    <>
      <Card>
        <Slide
          bg={sliderData[currentSlide1].img}
          to={sliderData[currentSlide1].url}
        />
        <Arrow left onClick={prevHandler1} />
        <Arrow onClick={nextHandler1} />
        <ButtonWrapper>
          {sliderData.slice(0, 3).map((slide, index) => {
            return (
              <SliderButton
                key={index}
                isCurrent={currentSlide1 === index}
                onClick={(): void => setCurrentSlide1(index)}
              />
            );
          })}
        </ButtonWrapper>
      </Card>
      <Card>
        <Slide
          bg={sliderData[currentSlide2].img}
          to={sliderData[currentSlide2].url}
        />
        <Arrow left onClick={prevHandler2} />
        <Arrow onClick={nextHandler2} />
        <ButtonWrapper>
          {sliderData.slice(3, 6).map((slide, index) => {
            return (
              <SliderButton
                key={index}
                onClick={(): void => setCurrentSlide2(index)}
              />
            );
          })}
        </ButtonWrapper>
      </Card>
    </>
  );
};

export default HeaderCards;
