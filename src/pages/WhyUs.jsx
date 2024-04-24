
const WhyUs = () => {
    return (
        <div className=" min-h-screen sm:min-h-screen relative sm:bg-gradient-to-b sm:from-white sm:to-customBlue">
            <div className="w-full text-center ">
                <h2 className="text-customBlue block sm:hidden pt-24 px-auto text-xl font-semibold leading-snug">
                    Why us ?
                </h2>
            </div>

            <svg
                width="1280"
                height="312"
                viewBox="0 0 1280 312"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 inset-x-0 w-full "
            >
                <g filter="url(#filter0_f_513_467)">
                    <path
                        d="M-149.392 408.159C-116.524 322.241 31.1156 49.9999 596.659 50C1162.2 50.0001 1380 322.241 1380 408.159C1380 494.077 1380 575 1380 575H-149.392C-149.392 575 -182.26 494.077 -149.392 408.159Z"
                        fill="#0073E6"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_513_467"
                        x="-214"
                        y="0"
                        width="1644"
                        height="625"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="25"
                            result="effect1_foregroundBlur_513_467"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default WhyUs;
