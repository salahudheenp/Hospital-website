import { Dot } from "lucide-react";
import React from "react";


interface MenuItem {
  label: string;
  link: string;
}

const Menu = () => {
  const menu: MenuItem[] = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Gallery", link: "/gallery" },
    { label: "Promotions", link: "/promotions" },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <div>
      <ul className='flex flex-row justify-between gap-x-7 font-semibold xl:text-sm xl:gap-2'>
        {menu.map((item, index) => (
          <li key={index} className='flex flex-row justify-between items-center gap-x-2 '>
            <a href={item.link}>{item.label}</a>
            {menu.length-1==index?null : <Dot size={36}/>}
            
          </li>
        ))}
      </ul>

  

    </div>
  );
};

export default Menu;
