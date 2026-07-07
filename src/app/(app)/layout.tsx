import React from "react";
import { SideNav } from "@/components/sidenav/SideNav";

export default function AppLayout({
    children}:{children:React.ReactNode}){
        return (
        <div>
            <SideNav/>
        </div>
        )
    }