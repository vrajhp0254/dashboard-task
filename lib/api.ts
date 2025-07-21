// lib/api.ts
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
