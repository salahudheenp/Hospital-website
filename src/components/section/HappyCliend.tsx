import React, { useState, useEffect } from "react";
import img from "../../assets/cliend/Frame 1321315036.png"

const HappyCliend = () => {
  const clients = [
    {
      name: 'Jang Wonyoung',
      location: 'Korea',
      feedback:
        'We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions',
      img: 'https://placehold.co/40',
    },
    {
      name: 'Jennie Kim',
      location: 'USA',
      feedback:
        'Our priority, and we appreciate the opportunity to address any issues and ensure your complete satisfaction.',
      img: 'https://placehold.co/40',
    },
    {
      name: 'Lisa Manoban',
      location: 'Thailand',
      feedback:
        'Exceptional service! I am thrilled with my smile and grateful for the professionalism of the team.',
      img: 'https://placehold.co/40',
    },
    {
      name: 'Kim Taehyung',
      location: 'South Korea',
      feedback: 'An excellent experience! My teeth have never looked better!',
      img: 'https://placehold.co/40',
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? clients.length - 1 : prevIndex - 1
  //   );
  // };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 2));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [clients.length]);

  return (
    <div className="bg-orange-500 flex items-center justify-center h-[750px] text-white text-center">
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-items-start">
   
      <div className="w-1/2 x-10 mt-20 ml-10">
      <img
        src={img}
        alt="A happy client with a dentist"
        className="rounded-lg mb-8"
      />
      </div>
      <div className=" w-2/3  mt-32 flex justify-start  ">
      <h1 className="text-4xl font-bold mb-4 ">
        500+ Happy clients said <br/> to us they are satisfied
      </h1>
      </div>
      </div>

      {/* =============================================================== */}
      <div className="flex space-x-4 w-[670px]">
      <div className="relative w-full max-w-4xl mx-auto ">
      {/* Slider Content */}
      <div className="relative x-20 bottom-44 left-96 ">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${currentIndex * 50}%)`, 
          }}
        >
          {clients.map((client, index) => (
            <div className="flex gap-4">
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg w-80 mx-auto flex-shrink-0"
            >
              <p className="mb-4">{client.feedback}</p>
              <div className="flex items-center">
                <img
                  src={client.img}
                  alt={`Profile picture of ${client.name}`}
                  className="rounded-full w-10 h-10 mr-4"
                />
                <div>
                  <p className="font-bold">{client.name}</p>
                  <p>{client.location}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(clients.length / 2) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * 2)} // Optional: Allow manual dot navigation
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              currentIndex / 2 === index ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
      </div>

      {/* Dots Navigation */}
      
    </div>
    </div>
      {/* =============================================================== */}
      {/* <div className="flex space-x-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-lg w-80"
          >
            <p className="mb-4">{client.feedback}</p>
            <div className="flex items-center">
              <img
                src={client.img}
                alt={`Profile picture of ${client.name}`}
                className="rounded-full w-10 h-10 mr-4"
              />
              <div>
                <p className="font-bold">{client.name}</p>
                <p>{client.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <span className="h-2 w-2 bg-white rounded-full mx-1"></span>
        <span className="h-2 w-2 bg-white rounded-full mx-1"></span>
        <span className="h-2 w-2 bg-white rounded-full mx-1"></span>
        <span className="h-2 w-2 bg-white rounded-full mx-1"></span>
      </div> */}
    </div>
  </div>
  )
}

export default HappyCliend