import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-gradient-to-t from-sky-400 via-blue-500 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">Auth</h1>
        <p className="text-white text-lg text-opacity-90">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">Sign In</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
