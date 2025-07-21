// app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-muted-foreground">
          Your cart is empty.{" "}
          <Link href="/dashboard" className="underline text-primary">
            Go shopping
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain h-20 w-20"
                />
                <div className="flex-1 space-y-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-muted-foreground capitalize">
                    {item.category}
                  </p>
                  <p className="font-bold">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </main>
  );
}
