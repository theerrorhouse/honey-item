"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add additional search logic here if needed
  };

  return (
    <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">DiscountDeals</div>
      <form onSubmit={handleSearch} className="flex items-center">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button type="submit" variant="secondary" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </header>
  );
}
