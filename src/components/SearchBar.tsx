import searchImg from '../assets/images/search-5j3.png';
import Image from "./Image";

export default function SearchBar() {
    return (
        <div className="w-full h-[4.4rem] relative">
            <input className="w-[44.2rem] h-[2.4rem] absolute left-[13.7rem] top-4  border-[0.1rem] border-[rgba(255,255,255,0.200000003)] box-border bg-transparent rounded-[0.4rem] text-white px-3 focus:border-0">
            </input>
            <div className="w-[6.7636rem] h-[1.6rem] absolute left-[32.3364rem] top-[1.4rem] flex items-center">
                <Image className="w-[1.4rem]" src={searchImg} />
                <p className="text-gray-300 pl-2">Explore</p>
            </div>
        </div>
    )
}