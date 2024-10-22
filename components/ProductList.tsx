"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  rating: number;
};

export default function ProductList({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [products, setProducts] = useState(initialProducts);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const q = searchParams.get("q");
      const category = searchParams.get("category");

      const filteredProducts = initialProducts.filter((product) => {
        if (q && !product.name.toLowerCase().includes(q.toLowerCase()))
          return false;
        if (category && product.category !== category) return false;
        return true;
      });

      setProducts(filteredProducts);
    }
  }, [searchParams, initialProducts]);

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="p-4 flex hover:shadow-md transition-shadow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover mr-4"
          />
          <div className="flex-grow">
            <Link href={`/product/${product.id}`} className="hover:underline">
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </Link>
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
      ))}
    </div>
  );
}
