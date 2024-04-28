const Card = ({ description, src }) => {
    return (
        <div className="w-64 h-60 md:w-96  sm:h-auto lg:w-96 bg-white border p-4 rounded-lg shadow">
            <div className="backdrop-blur-sm">
                <img
                    src={src}
                    alt={description}
                    loading="lazy"
                    className="overflow-hidden w-full h-36 md:h-72 object-cover rounded-lg"
                />
            </div>
            <div className="text-center text-black pt-3">
                <p className="text-lg md:text-3xl font-bold font-['Inter']">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
