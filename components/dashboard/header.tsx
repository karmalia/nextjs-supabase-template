"use client";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; // Importing shadcn menu components
import { Avatar } from "@/components/ui/avatar"; // Optional: Use for user avatar
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabaseClient } from "@/lib/supabase";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LucideHam, LucideMenu } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabaseClient.auth.getUser();
      console.log("data", data);
      console.log("error", error);
      setUserEmail(data.user?.email || null);
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-end h-32 px-12 bg-pink-600 w-full">
      <div className="relative flex items-center ">
        {userEmail && (
          <div className="flex items-center space-x-2">
            {/* Optional: Display user avatar */}
            <Avatar name={userEmail} size="sm" className="bg-gray-500" />

            {/* User Email */}
            <span className="text-white">{userEmail}</span>

            {/* Dropdown Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <LucideMenu className="w-6 h-6 " />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <Button onClick={handleSignOut}>Sign Out</Button>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
