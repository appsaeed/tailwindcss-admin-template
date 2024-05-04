import { ImgHTMLAttributes, useEffect, useRef, } from "react";
import { ccn } from "../utils/helper";


export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function Image(props: ImageProps) {
    const _image = useRef<HTMLImageElement | null>(null);
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("image-blurr", !entry.isIntersecting);
                if (entry.isIntersecting) observer.unobserve(entry.target);
            });
        });

        if (_image.current) {
            _image.current.addEventListener("load", () => {
                if (_image?.current?.complete && _image.current.naturalHeight) {
                    observer.observe(_image.current);
                }
            });
        }

        return (() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.unobserve(_image.current as Element);
            observer.disconnect();
        });
    }, []);

    return (
        <img ref={_image} alt={'alt'} {...props} loading="lazy" className={ccn('image-blurrs', props.className)} />
    );
}