import React, { useState } from "react";
import HeroImage from "../../assets/hero/Hero.png";
import HeroImage2 from "../../assets/hero/young-female-patient-visiting-dentist-office.jpg";
import HeroImage3 from "../../assets/hero/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import img1 from "../../assets/hero/1.png";
import img2 from "../../assets/hero/2.png";
import img3 from "../../assets/hero/3.png";
import img4 from "../../assets/hero/4.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data : any=[
    {icon:img1,title:"20+ Yrs",description:"Dental Care"},
    {icon:img2,title:"2200+",description:"Google Reviews"},
    {icon:img3,title:"50K+",description:"Happy Patients"},
    {icon:img4,title:"15+",description:"Dentists"}
  ]

  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([HeroImage,HeroImage3,HeroImage,HeroImage3]);
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="h-[1100px] w-full bg-black ">
      <div className="h-24 w-full"></div>
      <div
        className="h-[850px] w-full flex items-center justify-center bg-gray-50"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:w-1/2 w-full h-full ">
          <h1 className="text-black text-[76px] leading-none font-bold ml-14 mt-40">
            Have a shining <br />
            smile with our <br />
            <span className="text-orange-500">modern methods!</span>{" "}
          </h1>
          <div className="mt-72 ml-32">
            <Button className="rounded-full" variant={"outline"} onClick={handlePrev}><ArrowLeft /></Button>
            <Button className="rounded-full" variant={"outline"} onClick={handleNext}><ArrowRight /></Button>
            </div>
        </div>
        <div className="w-1/2 h-full  justify-end mt-40 mr-14 hidden lg:flex">
          <div className="w-64 h-56 border-4  rounded-lg p-5">
            <h3 className="text-orange-500 ">
              <span className="text-2xl font-bold">15+</span> Expert Doctors
            </h3>
            <div className="flex flex-row gap-x-2 my-3">
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-sm">
              We take meticulous care of
              <br /> your dental needs
              <br /> to ensure a healthy, lasting smile.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white mx-14 h-40 relative bottom-20">
        <div className="w-full flex flex-row justify-between p-10">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-row justify-center items-center "
              >
                <div className="w-1/2 flex justify-center items-center">
                  <img
                    src={item.icon}
                    className="w-auto h-full"
                    alt=""
                  />
                </div>
                <div className="w-1/2 flex-col ">
                  <h1 className="text-orange-500 text-3xl font-bold">{item.title}</h1>
                  <h4>{item.description}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;