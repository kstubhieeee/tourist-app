export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0B7A75]/10 via-white to-[#FF7A59]/10 px-4">
      {children}
    </div>
  );
}

