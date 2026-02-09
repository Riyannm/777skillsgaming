"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navigation from "./components/ui/Navigation";
import ElectricButton from "./components/ui/ElectricButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-orange mb-4">Oops!</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ElectricButton onClick={reset}>Try Again</ElectricButton>
            <Link href="/">
              <button className="px-8 py-4 rounded-lg font-semibold text-foreground border-2 border-primary hover:bg-primary/10 transition-colors">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
