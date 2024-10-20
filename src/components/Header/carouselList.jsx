import { carouselData } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CarouselList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
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
              className="rounded-md shadow-sm p-2 mx-2 h-96 flex flex-col justify-around gap-6"
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
