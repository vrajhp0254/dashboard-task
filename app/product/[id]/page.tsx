// app/product/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/api";
import { Product } from "@/types/product";
import Image from "next/image";
import { AddToCart } from "@/components/AddToCart";

export default function ProductPageClient() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain w-full h-[300px]"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-muted-foreground capitalize">{product.category}</p>
          <p className="text-lg">{product.description}</p>
          <p className="text-2xl font-bold">${product.price}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
