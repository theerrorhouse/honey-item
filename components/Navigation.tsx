"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/CategoryData";
import Link from "next/link";

export default function Navigation() {
  const [activeCategory, setActiveCategory] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveCategory("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-secondary text-secondary-foreground p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </li>
        <div ref={dropdownRef}>
          <li className="relative">
            <Button
              variant="ghost"
              onClick={() =>
                setActiveCategory(
                  activeCategory === "Categories" ? "" : "Categories"
                )
              }
            >
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeCategory === "Categories" && (
              <div className="absolute top-full left-0 bg-background shadow-lg rounded-md p-2 z-10">
                {categories.map((category) => (
                  <div key={category.name} className="p-2">
                    <Link
                      href={`/categories/${category.name}`}
                      key={category.name}
                    >
                      <Button variant="ghost" className="w-full justify-start">
                        {category.name}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </li>
        </div>
        <li>
          <Link href="/discounts">
            <Button variant="ghost">Discounts</Button>
          </Link>
        </li>
        <li>
          <Link href="/reviews">
            <Button variant="ghost">Reviews</Button>
          </Link>
        </li>
        <li>
          <Link href="/hot-deals">
            <Button variant="ghost">Hot Deals</Button>
          </Link>
        </li>
        <li>
          <Link href="/forum">
            <Button variant="ghost">Forum</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
