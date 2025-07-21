// components/AddToCart.tsx
"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export const AddToCart = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <Button onClick={() => addToCart(product)}>
      Add to Cart
    </Button>
  );
};
