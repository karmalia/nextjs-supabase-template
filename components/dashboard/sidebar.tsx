"use client";
import { useState } from "react";
import { cn } from "@/lib/utils"; // utility function for handling classnames
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "../ui/button";

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-64  bg-pink-600 text-white flex flex-col">
      <div className="flex items-center justify-center h-32 text-xl font-semibold ">
        My Dashboard
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {/* Normal Navigation Button */}
        <Link href="/dashboard">
          <Button className="w-full">Dashboard</Button>
        </Link>
        <Link href="/products">
          <Button className="w-full">Ürünlerim</Button>
        </Link>
        <Link href="/orders">
          <Button className="w-full">Siparişlerim</Button>
        </Link>
        <Link href="/members">
          <Button className="w-full">Üyeler</Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
