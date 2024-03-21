import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import {  CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu=()=>{
    const {user,logout}=useAuth0()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-indigo-500 gap-2">
                <CircleUserRound className="text-indigo-500"/>
                {user?.email}
                
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                <Link to="/user-profile" className="font-bold hover:text-indigo-500">
                    User Profile
                </Link>

                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button className="flex flex-1 font-bold bg-indigo-500"
                    onClick={()=>logout()}>
                        Log Out
                    </Button>
                </DropdownMenuItem>
               
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UsernameMenu;