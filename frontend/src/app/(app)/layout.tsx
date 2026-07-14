import React from "react";
import "./layout.css";
import { SideNav } from "../../components/sidenav/SideNav";
import { getFromCacheMap } from "next/dist/client/components/segment-cache/cache-map";

export default function AppLayout({
    children}:{children:React.ReactNode}){
        return (
        <div>
            <SideNav/>
            <main id="main">
                {children}
            </main>
        </div>
        )
    }