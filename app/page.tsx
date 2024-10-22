"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { products } from "@/data/ProductData";
import { categories } from "@/data/CategoryData";

export default function DiscountProductsSite() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Left Ad Space */}
        <aside className="w-1/6 p-4 bg-muted">
          <div className="bg-accent h-full flex items-center justify-center">
            Ad Space
          </div>
        </aside>

        {/* Product Listings */}
        <main className="w-4/6 p-4">
          <h1 className="text-3xl font-bold mb-4">Featured Discounts</h1>
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card className="p-4 flex hover:shadow-md transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-muted-foreground">{product.brand}</p>
                    <p className="text-lg font-bold mt-2">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                      <span className="ml-1">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </main>

        {/* Right Ad Space */}
        <aside className="w-1/6 p-4 bg-muted">
          <div className="bg-accent h-full flex items-center justify-center">
            Ad Space
          </div>
        </aside>
      </div>
    </div>
  );
}
