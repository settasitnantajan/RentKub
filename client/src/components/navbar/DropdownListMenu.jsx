import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from 'lucide-react';
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import { Links } from "@/utils/Links";
import { Link } from "react-router";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button variant="outline">
            <AlignLeft />
            <UserIcon />
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {
            Links.map((item, index) => {
                return (
                    <DropdownMenuItem key={index}>
                        <Link to={item.href}>
                        {item.label}
                        </Link>
                    </DropdownMenuItem>
                )
            }
                )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
