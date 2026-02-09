export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
        </div>
        <p className="text-foreground text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
