import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./ListItem";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex items-center">
      <Link href="/" className="flex space-x-2">
        {/* <Icons.logo className="h-6 w-6" aria-hidden="true" /> */}
        <span className="hidden font-bold lg:inline-block">Skaters</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link href="/" className="h-full w-full ">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Skaters
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        An open source ecommerce skateshop built with everything
                        new in Next.js
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/products" title="Products">
                  All the products we have to offer
                </ListItem>
                <ListItem href="/#categories" title="Categories">
                  See all categories we have
                </ListItem>
                <ListItem href="/dashboard/stores" title="Create store">
                  Create store and start selling products
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
