import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-4 bg-white">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
