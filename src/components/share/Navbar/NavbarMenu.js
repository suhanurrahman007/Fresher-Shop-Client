"use client";
import useProducts from "@/components/hooks/useProducts";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/components/ui/utils/cn";
import React, { useState } from "react";

export function NavbarMenu() {
  return (
    <div className="relative w-full">
      <Navbar />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [products, refetch] = useProducts();

  const categories = [
    "Food",
    "Casual",
    "Accessories",
    "Sports",
    "Home",
    "Electronics",
    "PersonalCare",
    "Casuals",
    "Accessoriess",
    "Sportss",
    "Homes",
    "Electronicss",
    "PersonalCares",
  ];

  return (
    <div
      className={cn("fixed top-[70px] inset-x-0 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {categories?.map((item, index = 1) => (
          <MenuItem
            setActive={setActive}
            key={index + 1}
            active={active}
            item={item}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/shop">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
