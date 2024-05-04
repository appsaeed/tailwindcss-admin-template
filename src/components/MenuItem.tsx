import { AnchorHTMLAttributes } from "react";
import { ccn } from "../utils/helper";

interface MenuProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    selected?: boolean;
    name: string;
}

export default function MenuItem(props: MenuProps) {
    return (
        <a href={props.name} {...props} className={ccn(props.className, 'p-2 w-full rounded-xl', {
            'bg-[rgba(22,21,21,0.5)]': props.selected
        })}>
            <div className="h-full flex">
                <div className="mx-4 h-full text-lg text-[rgba(255,_255,_255,_0.6000000238)] ">􀑪</div>
                <p className="text-lg tracking-[0.036rem] text-[#ffffff]">{props.name}</p>
            </div>
        </a>
    )
}
