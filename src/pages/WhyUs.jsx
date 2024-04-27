import React from "react";

const Card = ({ imageUrl, description }) => {
    return (
      <div className="flex-shrink-0 w-64 mx-4 overflow-hidden rounded-lg shadow-lg">
        <img className="w-full h-48 object-cover" src={imageUrl} alt="Card" />
        <div className="p-4">
          <p className="text-lg text-center font-semibold mb-2">{description}</p>
         
        </div>
      </div>
    );
  };
  
  const WhyUs = () => {
    // Sample data for cards
    const cards = [
      {
        imageUrl: "https://via.placeholder.com/300",
        description: "Next-level tools, personalized insights.",
      },
      {
        imageUrl: "https://via.placeholder.com/300",
        description:"Your financial network, Connected." ,
      },
      {
        imageUrl: "https://via.placeholder.com/300",
        description: "Secure Investment",
      },
    ];
  
    return (
      <>
      <div id="WhyUs" className="sm:h-screen bg-gradient-to-b from-white to-customBlue">
              <div className="w-full text-center ">
                  <h2 className="text-customBlue block  mt-12 px-auto text-2xl font-extrabold leading-snug">
                      Why Us?
                  </h2>
                  </div>
      <div className="flex overflow-x-auto no-scrollbar justify-between m-20 p-4" >
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} description={card.description} />
        ))}
      </div>
      </div>
      </>
    );
  };
  
  export default WhyUs;
  