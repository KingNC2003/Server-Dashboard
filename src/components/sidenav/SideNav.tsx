"use client";

import "./SideNav.css";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuMessageCircle } from "react-icons/lu";

export function SideNav(){
return(
    <aside className="sideNav">
        <header className="sideNavHead">
            <Image
                src="./nexus.svg"
                width={40}
                height={40}
                alt="Dashboard Logo"
            />
            <div>
                <h1> exus </h1>
                <h2> v0.1 · HomeLab </h2>
            </div>
        </header>
        <nav id="sideNavNav">
            <h2> WORKSPACE </h2>
                <Link href="null"> <RxDashboard/> Dashboard </Link>
                <Link href="null"> <RxHamburgerMenu/> Applications </Link>
                <Link href="null"> Request Help </Link>
                <Link href="null"> Changelog </Link>
        </nav>
        <nav id="sideNavNav">
            <h2> ADMIN </h2>
                <Link href="null"> Server Monitor </Link>
                <Link href="null"> Users </Link>
                <Link href="null"> Tickets </Link>
        </nav>
        <footer>
            <button> 
                <Image
                src = "/meTemp.jpg"
                width = {40}
                height={40}
                alt = "Profile pic"
                />
            </button>
            <div>
                <h2> Nicholas</h2>
                <h2> Owner </h2>
            </div>
        </footer>
    </aside>
)
}