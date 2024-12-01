import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden flex">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu />
            <span>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-4 px-2">
            <Link href="/" className="flex items-center">
              <span className="font-bold">Skaters</span>
              <span className="sr-only">Home</span>
            </Link>
            <div className="text-sm">
              <Accordion
                type="multiple"
                defaultValue={["item-1", "item-2", "item-3"]}
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>My Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/dashboard/orders"
                      >
                        Orders
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/dashboard/stores"
                      >
                        Stores
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Lobby</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link onClick={() => setIsOpen(false)} href="/products">
                        Products
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/#categories"
                      >
                        Categories
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/dashboard/stores"
                      >
                        Create store
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/products?category=skateboards"
                      >
                        Skateboards
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/products?category=clothing"
                      >
                        Clothing
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/products?category=shoes"
                      >
                        Shoes
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/products?category=accessories"
                      >
                        Accessories
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
