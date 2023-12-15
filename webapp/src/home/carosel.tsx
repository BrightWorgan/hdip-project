import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// images
const items = [
  {
    src: "src/assets/cliffsPano1600.jpg",
    altText: "O'Briens Tower, Cliffs of Moher, Co. Clare",
    caption: "Sheet Scribe: For all of your Traceable Heritage needs",
    key: 1,
  },
  {
    src: "src/assets/wicklowMountainsPano1600x435.jpg",
    altText: "Wicklow National Park, Co. Wicklow",
    caption: "Sheet Scribe: For all of your Traceable Heritage needs",
    key: 2,
  },
  {
    src: "src/assets/trimCastlePano1600x435.jpg",
    altText: "Trim Castle, Trim, Co. Meath",
    caption: "Sheet Scribe: For all of your Traceable Heritage needs",
    key: 3,
  },
];

const HomeImages = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{ height: "100%" }}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const item = items[0];

  return <img src={item.src} alt={item.altText} style={{ minWidth: "100%" }} />;
};

export default HomeImages;
