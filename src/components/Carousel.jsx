import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import CarouselPic1 from "../assets/CarouselPic1.jpeg";
import CarouselPic2 from "../assets/CarouselPic2.jpeg";
import CarouselPic3 from "../assets/CarouselPic3.jpeg";

const cardData = [
    {
        description: "Secure investment discussions",
        src: CarouselPic1,
    },
    {
        description: "Your financial network. Connected.",
        src: CarouselPic2,
    },
    {
        description: "Next-level tools, personalized insights.",
        src: CarouselPic3,
    },
];

const Carousel = () => {
    return (
        <div className="flex items-center justify-center  ">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center px-6 pb-8    cursor-pointer">
                            <Card description={card.description} src={card.src} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;



   // return (
    //     <div className="carousel">
    //         <div className="flex gap-4">
    //             {cardData.map((card, index) => (
    //                 <Card
    //                     key={index}
    //                     description={card.description}
    //                     src={card.src}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );