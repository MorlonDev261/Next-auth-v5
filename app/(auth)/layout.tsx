export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gradient-to-b from-sky-400 via-blue-500 to-blue-800">
      {children}
    </div>
  );
}
