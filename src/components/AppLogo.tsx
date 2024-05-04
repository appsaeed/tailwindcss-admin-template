import { ImgHTMLAttributes } from "react";
import config from "../app/config";
import Image from "./Image";

export default function AppLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="p-4">
            <a href={config.url} className="w-full h-full">
                <Image src={props.src} />
            </a>
        </div>
    )
}
