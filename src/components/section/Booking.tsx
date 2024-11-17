import React from 'react'
import imgBg from "../../assets/booking/Frame 1321315051 (1).png"
import img from "../../assets/booking/young-man-using-phone-while-standing-against-white-background-removebg-preview 1.png"

const Booking = () => {
  return (
    <div className="flex justify-center  bg-white mb-8">
    <div className="relative w-3/4 h-1/2 bg-orange-500 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-orange-500 opacity-50"
        style={{
          backgroundImage: `url(${imgBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative z-10 flex items-center h-full">
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Book an Appointment With Your Doctor NOW!
          </h1>
          <p className="text-white mb-4">
            Conveniently pay for your dental treatments with your insurance.
            We accept major insurance providers.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={img}
            alt="Woman talking on the phone and holding a clipboard"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Booking
