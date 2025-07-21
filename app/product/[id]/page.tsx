export const dynamic = "force-dynamic";

import { fetchProductById } from "@/lib/api";
import { Product } from "@/types/product";
import { AddToCart } from "@/components/AddToCart";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product: Product;

  try {
    product = await fetchProductById(params.id);
  } catch (err) {
    return notFound();
  }

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
