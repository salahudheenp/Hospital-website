import React from "react";
import img1 from "../../assets/offers/ofrimg1.png";  // Import the image
import img2 from "../../assets/offers/ofrimg2.png";  // Import the image
import img3 from "../../assets/offers/ofrimg3.png";  // Import the image

const offers = [
  {
    image: img1,  // Use the imported image
    title: "Cleaning Polishing, Teeth Whitening and Comprehensive Consultation",
    price: "599 AED",
    details: [
      "Flash Tooth Whitening System for 1 Hour",
      "Deep Cleaning and Polishing",
      "Full Mouth Treatment Plan Included",
    ],
  },
  {
    image: img2,  // Use the imported image
    title: "Orthodontic Braces",
    price: "2499 AED",
    details: [
      "American Association of Orthodontist Member",
      "Align Your Complete Teeth in 6-12 Months",
      "Complimentary Teeth Cleaning During Orthodontic Treatment",
    ],
  },
  {
    image: img3,  // Use the imported image
    title: "Premium Quality Hollywood Smile 20 Teeth",
    price: "14000 AED",
    details: [
      "German Quality Super Thin Veneers",
      "Painless and Delivered in 5 Days in 2 Sessions",
      "German Trained Cosmetic Dentist Who Delivered More than 2000 Smiles",
    ],
  },
];
const Offers = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full">
  <h1 className="text-4xl font-bold text-gray-900">
    Exclusive<br /> Monthly Dental Offers
  </h1>
  <div className="w-1/2">
  <p className="text-gray-600 mt-2 ">
    Unlock your smile's potential with our exclusive <br /> dental offers for this month
  </p>
  </div>
</div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {offers.map((offer, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-base font-semibold text-gray-900 mt-4">
            {offer.title}  {/* Adjusted text size */}
          </h2>
          <p className="text-3xl font-bold text-orange-500 mt-2">{offer.price}</p>
          <ul className="mt-4 text-gray-600">
            {offer.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-black text-white py-2 rounded-lg">
            MAKE AN APPOINTMENT
          </button>
        </div>
      ))}
    </div>
  </div>
  

  )
}

export default Offers