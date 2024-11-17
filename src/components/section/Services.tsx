import React from 'react';
 import icon1 from "../../assets/services/service1.png"
 import icon2 from "../../assets/services/service2.png"
 import icon3 from "../../assets/services/service3.png"
 import icon4 from "../../assets/services/service4.png"
 import icon5 from "../../assets/services/service5.png"
 import icon6 from "../../assets/services/service6.png"
 import icon7 from "../../assets/services/service7.png"
 import icon8 from "../../assets/services/service8.png"
 import icon9 from "../../assets/services/service8.png"
// type Service = {
//   icon: string;
//   text: string;
// };

const services = [
  { icon: icon1, title: "Orthodontics" },
  { icon:icon2, title: "General Dentistry" },
  { icon: icon3, title: "Cosmetic Dentistry" },
  { icon: icon4, title: "Teeth Whitening" },
  { icon: icon5, title: "Gum Treatment" },
  { icon: icon6, title: "Root Canal Treatment" },
  { icon: icon7, title: "Crowns and Bridges" },
  { icon: icon8, title: "Jaw Joint Disorder" },
  { icon: icon9, title: "Children's Dentistry" },
];
const Services: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 mt-16 pb-16">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Transform your smile with <br />
        veneers, whitening, and implants.
      </h1>
      <p className="text-gray-500 mb-8">
        Lorem Ipsum available, but the majority have suffered alteration in
        some form,
        <br />
        by injected humour, or randomised words which don't look even.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-50 p-6 text-center shadow-md hover:shadow-lg transition-shadow h-44 w-44 flex flex-col items-center justify-center"
          >
            {/* Image Section */}
            <img
              src={service.icon}
              alt={service.title}
              className="h-16 w-16 mb-4 object-contain"
            />
            {/* Text Section */}
            <h2 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services