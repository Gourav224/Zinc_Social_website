import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const cardData = [
    {
        description: "Secure investment discussions",
        src: "https://res.cloudinary.com/gourav224/image/upload/v1714293596/zinc/yf67hm7zpsjyiap2ixi0.jpg",
    },
    {
        description: "Your financial network. Connected.",
        src: "https://res.cloudinary.com/gourav224/image/upload/v1714293596/zinc/qtoivf2zf1otqzmcpnjs.jpg",
    },
    {
        description: "Next-level tools, personalized insights.",
        src: "https://res.cloudinary.com/gourav224/image/upload/v1714293589/zinc/alu9v2mvu5oz9gbfnpv3.jpg",
    },
];
const Carousel = () => {
    return (
        <div className="flex items-center justify-center   ">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    
                    
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="w-full"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center gap-2 px-6 pb-8    cursor-pointer">
                            <Card description={card.description} src={card.src} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
