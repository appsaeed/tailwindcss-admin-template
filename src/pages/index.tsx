import Content from "../views/Content";
import Inspector from "../views/Inspector";
import Sidebar from "../views/Sidebar";

export default function index() {
    return (
        <div className="w-full h-full flex">
            <Sidebar className="sidebar flex bg-[radial-gradient(55.92%_106%_at_34.94%_108.33%,_#f7cbfd_0%,_#7758d1_100%)]" />
            <Content className="content bg-[#1d203e]" />
            <Inspector className="settingsBar bg-[#2c2f48]  [box-shadow:inset_0.1rem_0_0_rgba(255,_255,_255,_0.1000000015)]" />
        </div>
    )
}
