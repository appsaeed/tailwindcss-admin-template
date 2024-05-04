import { HTMLAttributes } from "react";
import AppLogo from "../components/AppLogo";
import MenuItem from "../components/MenuItem";
import SidebarItem from "../components/SidebarItem";

export default function Sidebar(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <div className="sidebar-items w-20 h-full backdrop-blur-[2rem] bg-[rgba(29,_32,_62,_0.3000000119)]">
                <AppLogo src="https://appsaeed.github.io/icon-512x512.png" className="border-b" />
                {/* <HR /> */}
                <SidebarItem src="./assets/logo-logo.png " />
                <SidebarItem src="./assets/logo-group-2-LYm.png" />
                <SidebarItem src="./assets/logo-group-3-wGy.png" />
                <SidebarItem src="./assets/logo-icon-add.png" />
                <SidebarItem src="./assets/explore.png" />
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
