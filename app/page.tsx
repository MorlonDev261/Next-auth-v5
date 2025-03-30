import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-sky-400 via-blue-500 to-blue-800">
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
