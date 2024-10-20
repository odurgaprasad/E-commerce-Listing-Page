import { carouselData } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CarouselList() {
  // Slick slider settings for responsiveness and autoplay
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 5, // Show 3 cards side by side
    slidesToScroll: 5, // Scroll 3 cards at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time interval in milliseconds for autoplay (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="font-bold text-3xl px-8">Nursery</h2>
      <div className="slider-container p-6 my-8">
        <Slider {...settings}>
          {carouselData.map((plant) => (
            <div
              key={plant.id}
              className="rounded-md shadow-sm p-2 mx-2 h-96 flex flex-col justify-around gap-6" // Same height and padding
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image h-48 w-48 object-cover rounded-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-center">
                {plant.name}
              </h2>
              <p className="text-gray-600 mt-2 text-center py-2 flex-grow">
                {plant.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
