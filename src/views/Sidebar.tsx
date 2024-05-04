import { HTMLAttributes } from "react";
import AppLogo from "../components/AppLogo";
import MenuItem from "../components/MenuItem";
import SidebarItem from "../components/SidebarItem";

import explore from '../assets/images/explore.png';
import logoGroup2 from '../assets/images/logo-group-2-LYm.png';
import logoGroup3 from '../assets/images/logo-group-3-wGy.png';
import logoIcon from '../assets/images/logo-icon-add.png';
import logo from '../assets/images/logo-logo.png';


export default function Sidebar(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <div className="sidebar-items w-20 h-full backdrop-blur-[2rem] bg-[rgba(29,_32,_62,_0.3000000119)]">
                <AppLogo src="https://appsaeed.github.io/icon-512x512.png" className="border-b" />
                {/* <HR /> */}
                <SidebarItem src={logo} />
                <SidebarItem src={logoGroup2} />
                <SidebarItem src={logoGroup3} />
                <SidebarItem src={logoIcon} />
                <SidebarItem src={explore} />
            </div>
            <div className="sidebar-list h-full bg-[rgba(44,_47,_72,_0.5)]">
                <div className="mb-4 p-6 text-2xl text-gray-300 font-bold [box-shadow:inset_0_-0.1rem_0_rgba(255,_255,_255,_0.1000000015)]">Explore</div>
                <div className="my-4 px-4 gap-y-2 flex flex-col">
                    <MenuItem name="Home" selected />
                    <MenuItem name="Gaming" />
                    <MenuItem name="Education" />
                    <MenuItem name="Science &amp; Tech" />
                    <MenuItem name="Entertainment" />
                    <MenuItem name="Student Hubs" />
                </div>
            </div>
        </div>
    )
}
