import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-gradient-radial from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">Auth</h1>
        <p className="text-white text-lg text-opacity-90">
          A simple authentication service
        </p>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </main>
  );
}
