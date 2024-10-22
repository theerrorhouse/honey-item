"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ThumbsUp, Eye } from "lucide-react";
import { products } from "@/data/ProductData";

export default function ProductDetails() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);
  const [recommendations, setRecommendations] = useState(
    product?.recommendations || 0
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleRecommend = () => {
    setRecommendations((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow p-6">
        <Card className="max-w-4xl mx-auto p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl font-semibold mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                {product.brand}
              </p>
              <p className="mb-2">Category: {product.category}</p>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                <span className="ml-1 text-lg">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  Compatible Models:
                </h2>
                <ul className="list-disc list-inside">
                  {product.compatibleModels.map((model) => (
                    <li key={model}>{model}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>{recommendations} recommendations</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-1" />
                  <span>{product.views} views</span>
                </div>
              </div>
              <Button onClick={handleRecommend}>Recommend</Button>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4">
        <div className="text-center">
          <p>&copy; 2024 DiscountDeals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
