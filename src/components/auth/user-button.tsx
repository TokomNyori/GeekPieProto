"use client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { div } from "three/webgpu";
import { useCurrentUser } from "@/hooks/use-current-user";
import SignOut from "@/components/auth/signout-button";
import { IconLogout } from "@tabler/icons-react";

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            className="shadow-md"
            src={user?.image || ""}
          />
          <AvatarFallback
            className="rounded-full bg-white shadow-md"
          >
            {user?.name?.split(" ")[0].slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white">
        <SignOut>
          <DropdownMenuItem className="cursor-pointer">
            <IconLogout className="h-5 w-5" />
            Logout
          </DropdownMenuItem>
        </SignOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
