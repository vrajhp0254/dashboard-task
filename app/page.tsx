// app/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center max-w-md space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Mini Dashboard</h1>
        <p className="text-muted-foreground">
          This is a sample responsive dashboard built with Next.js, TailwindCSS, and ShadCN UI.
        </p>
        <Button onClick={() => router.push("/dashboard")}>
          Go to Product Dashboard
        </Button>
      </div>
    </main>
  );
}
