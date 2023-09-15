import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="w-[85%] max-sm:w-[95%] overflow-hidden mx-auto min-h-[100vh]">
      <Outlet />
    </main>
  );
}
