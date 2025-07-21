// components/CategoryFilter.tsx
"use client";

import { Product } from "@/types/product";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
  products: Product[];
  selected: string | null;
  setSelected: (category: string | null) => void;
}

export const CategoryFilter = ({ products, selected, setSelected }: Props) => {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selected ? selected : "All Categories"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setSelected(null)}>All</DropdownMenuItem>
        {categories.map((cat) => (
          <DropdownMenuItem key={cat} onClick={() => setSelected(cat)}>
            {cat}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
