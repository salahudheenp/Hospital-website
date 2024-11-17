import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#0a1a1f] text-white p-10">
      <div className="flex justify-between">
        <div>
          <div className="bg-white">
            <img src="/logo.png" alt="" className="w-22 h-auto" />
          </div>
          <div></div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <p>Contact Number</p>
            <p>+971 4 2979464</p>
            <p>+971 56 4848613</p>
            <p>Email</p>
            <p>info@smiledentaldubai.com</p>
          </div>
          <div className="flex space-x-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fas fa-phone-alt"></i>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Our Address</h2>
          <p>Room No: 314 Al Attar Shopping Mall</p>
          <p>Next to Karama Center, Al Karama,</p>
          <p>P.O.Box: 125706, Dubai, UAE</p>
          <h2 className="text-xl font-bold mt-4">Location Map</h2>
          <div className="w-full flex justify-center items-center mt-2">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.639341856423!2d77.668154488855!3d12.994904300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae113f6cb8ffad%3A0x3351b197d0ee7c81!2sTooth%20Essentials%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1731841242074!5m2!1sen!2sin"
        className="w-full h-[150px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Tooth Essentials Multispeciality Dental Clinic"
      ></iframe>
    </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul>
            <li>Children's Dentistry</li>
            <li>General Dentistry</li>
          </ul>
          <h2 className="text-xl font-bold mt-4">Opening Hours</h2>
          <p>Open all 7 days</p>
          <p>9:00 AM to 9:00 PM</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <p>
          @copyright all reserved by Smile Essentials - Powered by Hoxtox
          Technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;
