import Link from "next/link";
import Navigation from "./components/ui/Navigation";
import ElectricButton from "./components/ui/ElectricButton";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <ElectricButton>Go Home</ElectricButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
