import React from 'react'
import logo1 from "../../assets/insurence-parners/saico-insurance.png"
import logo2 from "../../assets/insurence-parners/nextcare-insurance-updated.png"
import logo3 from "../../assets/insurence-parners/neuron-insurance.png"
import logo4 from "../../assets/insurence-parners/nas.png"
import logo5 from "../../assets/insurence-parners/nas-insurance.png"
import logo6 from "../../assets/insurence-parners/msh-insurance-1.png"
import logo7 from "../../assets/insurence-parners/mednet-insurance.png"
import logo8 from "../../assets/insurence-parners/Almadallah-insurance-01.png"
import logo9 from "../../assets/insurence-parners/sukoon-oman-insurance.png"


const partners = [
  { name: "SAICO", logo:  logo1},
  { name: "Nextcare", logo: logo2 },
  { name: "Neuron", logo: logo3 },
  { name: "NGI", logo: logo4 },
  { name: "NAS", logo: logo5 },
  { name: "MSH", logo: logo6 },
  { name: "Mednet", logo: logo7 },
  { name: "Almadallah", logo: logo8},
  { name: "Sukoon", logo: logo9 },
];

const InsurencePartners = () => {
  return (
    <div className="text-center py-16 bg-white">
      <h1 className="text-4xl font-bold text-gray-900">Our Insurance Partners</h1>
      <p className="text-gray-600 mt-4">
        Conveniently pay for your dental treatments with your insurance.
        <br />
        We accept major insurance providers.
      </p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="border p-4 hover:border-blue-500 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsurencePartners