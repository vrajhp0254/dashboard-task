// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-primary">
        MiniDashboard
      </Link>

      <nav className="flex items-center gap-6">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>

        <Link href="/cart" className="relative flex items-center gap-1 hover:underline">
          <ShoppingCart size={20} />
          <span>Cart</span>
          {totalItems > 0 && (
            <Badge variant="secondary" className="ml-2">
              {totalItems} · ${totalPrice.toFixed(2)}
            </Badge>
          )}
        </Link>
      </nav>
    </header>
  );
};
