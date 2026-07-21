"use client";

import "./SideNav.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { RxDashboard } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuMessageCircle } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscServer } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { LuTicketSlash } from "react-icons/lu";
import { PiLineVerticalBold } from "react-icons/pi";

export function SideNav(){
    const pathname = usePathname();
return(
    <aside className="sideNav">
        <header className="sideNavHead">
            <div id="title">
                <Image
                    src="./nexus.svg"
                    width={40}
                    height={40}
                    alt="Dashboard Logo"
                />
                <h1> exus </h1>
            </div>
            <div id="info">
                <h2> v0.1 · HomeLab </h2>
            </div>
        </header>
        <div id="navNavGroup">
            <nav className="sideNavNav">
                <h2> WORKSPACE </h2>
                    <Link href="/dashboard" data-active={pathname === "/dashboard"}> <RxDashboard/> Dashboard </Link>
                    <Link href="/applications" data-active={pathname === "/applications"}> <RxHamburgerMenu/> Applications </Link>
                    <Link href="/request-help" data-active={pathname === "/request-help"}> <LuMessageCircle/> Request Help </Link>
                    <Link href="/changelog" data-active={pathname === "/changelog"}> <IoDocumentTextOutline/> Changelog </Link>
            </nav>
            <nav className="sideNavNav">
                <h2> ADMIN </h2>
                    <Link href="/server-monitor" data-active={pathname === "/server-monitor"}> <VscServer/> Server Monitor </Link>
                    <Link href="/users" data-active={pathname === "/users"}> <LuUsers/> Users </Link>
                    <Link href="/tickets" data-active={pathname === "/tickets"}> <LuTicketSlash/> Tickets </Link>
            </nav>
        </div>
        <footer>
            <button> 
                <Image
                src = "/meTemp.jpg"
                width = {40}
                height={40}
                alt = "Profile pic"
                id="profPic"
                />
            </button>
            <div id="info">
                <h2 id = "name"> Nicholas</h2>
                <h2 id = "role"> Owner </h2>
            </div>
        </footer>
    </aside>
)
}