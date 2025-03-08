"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex bg-black w-full items-center md:px-6 px-2 justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <p className="text-white text-sm md:text-xl mr-7">
            S U P E R H U M A N
          </p>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resource</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Love💓</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="w-fit text-white text-center mr-2">
        <button className="button-gradient font-semibold px-4 text-lg py-1 rounded-lg">
          Get Started
        </button>
      </div>

      <div onClick={() => setOpenMenu((prev) => !prev)}>
        <Menu
          className="md:hidden block cursor-pointer"
          color="white"
          size={30}
        />
      </div>
      {openMenu && (
        <div className="absolute top-20 left-0 w-full h-full overflow-hidden z-20">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 w-full bg-black p-8 h-full"
          >
            <div className="phone-gradient absolute -left-100 -top-30 w-[1700px] h-[1200px]"></div>

            <ul className="flex text-xl flex-col gap-7 text-white relative z-10">
              <li>Product</li>
              <li>Resource</li>
              <li>Pricing</li>
              <li>Love</li>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
