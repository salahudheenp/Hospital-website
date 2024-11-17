import { Button } from "@/components/ui/button";
import React from "react";
import Menu from "./Menu";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MenuItem {
  label: string;
  link: string;
}

const menu: MenuItem[] = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Gallery", link: "/gallery" },
  { label: "Promotions", link: "/promotions" },
  { label: "Blogs", link: "/blogs" },
  { label: "Contact Us", link: "/contact" },
];

const Header: React.FC = () => {
  return (
    <header className="h-30 z-50 w-full items-center p-5 flex flex-row justify-between lg:px-14 fixed bg-white ">
      <div>
        <img
          src="/logo.png"
          alt=""
          className="w-22 h-auto"
        />
      </div>
      <div className=" flex-row items-center gap-x-8 hidden xl:flex">
        <div className="">
          <Menu />
        </div>
        <div>
          <Button variant={"orangeBtn"}>Appointment</Button>
        </div>
      </div>
      <div className="flex xl:hidden items-end">
      <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          {/* <SheetDescription>Select an option to navigate.</SheetDescription> */}
        </SheetHeader>
        <nav className="mt-4">
          <ul className="space-y-2">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-lg text-blue-600 hover:text-blue-800 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
      </div>
    </header>
  );
};

export default Header;