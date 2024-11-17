import React from "react";

import img1 from "../../assets/team/team1.png";
import img2 from "../../assets/team/team2.png";
import img3 from "../../assets/team/team3.png";
import img4 from "../../assets/team/team4.png";
import { Button } from "../ui/button";
type TeamMember = {
  name: string;
  role: string;
  img: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jhon Paul",
    role: "General Dentist",
    img: img1, // Imported asset
  },
  {
    name: "Dr. Khaled Abul",
    role: "Children's Dentist",
    img: img2, // Imported asset
  },
  {
    name: "Dr. Marwan Serhal",
    role: "Children's Dentist",
    img: img3, // Imported asset
  },
  {
    name: "Dr. Chinchu Mathew",
    role: "Children's Dentist",
    img: img4, // Imported asset
  },
];
const MeetTeam = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-16 h-96">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-gray-400 mb-12">
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, <br /> by injected humour, or randomised words which
            don't look even.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="relative bottom-40">
          <div className="flex justify-center flex-wrap gap-8 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg w-64"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
                  <Button className="bg-orange-500 ">View All Team</Button>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default MeetTeam;
