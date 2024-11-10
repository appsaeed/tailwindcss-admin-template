import userImg from '@/public/assets/images/user.jpg'
import { HTMLAttributes } from "react"
import Image from "../components/Image"
import MiniTitle from "../components/MiniTitle"

export default function Inspector(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>

            <div className="setting-profile">

                <div className="h-[4rem] [box-shadow:inset_0_-0.1rem_0_rgba(255,_255,_255,_0.1000000015)]"></div>

                <div className="py-4 flex justify-center">
                    <div className="flex flex-col items-center">
                        <div className="user-avatar">
                            <Image className="w-16 h-16 rounded-full ring-4 p-1 ring-gray-700" src={userImg} />
                        </div>
                        <div className="badge text-gray-400"><span className="text-gray-100">@</span>SaeedHossen</div>
                    </div>
                </div>

            </div>

            <div className="settings-items">
                <div className="p-2">

                    <MiniTitle text="New Members" seeAll />

                    <Member name="Miriam Soleil" />
                    <Member name="Mark Morain" />
                    <Member name="Marie Laval" />

                </div>

                <div className="p-2">

                    <MiniTitle text="Recent Activity" seeAll />

                    <Member name="Eva Solain" />
                    <Member name="Pierre Ford" />
                    <Member name="Steve Ater" />
                    <Member name="Anne Couture" />
                    <Member name="Anne Couture" />
                    <Member name="Anne Couture" />

                </div>
            </div>
        </div>
    )
}




interface MemberProps {
    name?: string,
    time?: number | string
    avatar?: string
    message?: string
}
export function Member({
    name = 'name',
    time = '0 min',
    message
}: MemberProps) {
    return (
        <div className="w-full p-3 my-1 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700">
            <div className="w-full h-full flex items-start">
                <Image className="w-10 h-10 mr-3 rounded-full ring-4 ring-gray-300 dark:ring-gray-500" src={userImg} />
                <div className="w-full">
                    <div className="flex justify-between">
                        <div className="text-base font-bold text-gray-300">{name}</div>
                        <div className="text-sm font-thin text-gray-400">{time} ago</div>
                    </div>
                    <span className="">
                        {message} Hello world
                    </span>

                </div>
            </div>
        </div>
    )
}