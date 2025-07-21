// components/ProductCard.tsx
"use client";

import { Product } from "@/types/product";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <Card className="hover:shadow-md transition">
      <CardHeader className="p-2">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain h-40 w-full mx-auto"
        />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-muted-foreground text-sm capitalize">{product.category}</p>
        <p className="font-bold">${product.price}</p>
        <div className="flex gap-2">
          <Button onClick={() => router.push(`/product/${product.id}`)} variant="outline">
            View
          </Button>
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};
