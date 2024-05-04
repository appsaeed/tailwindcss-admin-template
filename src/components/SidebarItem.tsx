import { AnchorHTMLAttributes } from "react";
import Image from "./Image";


interface ItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    src?: string;
}

export default function SidebarItem(props: ItemProps) {

    return (
        <div className="mx-4 my-4">
            <a href={props.src}>
                <Image src={props.src} />
            </a>
        </div>
    )
}
