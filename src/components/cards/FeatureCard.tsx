import { ccn } from "../../utils/helper"

type Props = {
    title?: string,
    text?: string,
    bgImage?: string
    className?: string
}

export default function FeatureCard({
    bgImage = './assets/group-img-uqo.png',
    className = '',
    title = 'title',
    text,
}: Props) {
    return (
        <div className={ccn(`h-[20rem] relative overflow-hidden [box-shadow:0_1rem_2rem_rgba(0,_0,_0,_0.5)] bg-[#2c2f48] rounded-[2rem] bg-cover flex`, className)} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="p-8 w-full h-4/5 bg-[url(./assets/shape-P1o.png)]  self-end flex">
                <div className="self-end">
                    <div className="text-[2.2rem] font-semibold text-gray-100">
                        {title}
                    </div>

                    {text && <p className="w-full text-xl font-normal text-gray-300">{text}</p>}

                    <div className="flex justify-between">
                        <div className="h-full flex">
                            <p className="mr-1 text-[1.2rem]">􁂛</p>
                            <p className="text-[1.2rem] font-normal">5,678 Online</p>
                        </div>
                        <div className="h-full flex">
                            <p className="mr-1">􀉭</p>
                            <p className="text-[1.2rem] font-normal">345,678 Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
