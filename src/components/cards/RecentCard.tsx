import bImage from '../../assets/images/photo-1651211305258-0c08f09097b3-1-pHs.png'
import userImg from '../../assets/images/user.jpg'
import Image from '../Image'

interface Props {
    title?: string,
    text?: string,
    bgImage?: string,
    avatar?: string
}

export default function RecentCard({
    text = 'text',
    title = 'title',
    bgImage = bImage,
    avatar = userImg
}: Props) {
    return (
        <div className="h-80 mb-6 relative overflow-hidden bg-[#2c2f48] rounded-[2rem]">
            <div className={`h-[50%] w-full bg-cover bg-left-top`}
                style={{
                    backgroundImage: `url(${bgImage})`
                }}
            >
            </div>

            <div className={`w-full h-[80%] bg-[rgba(60,64,88,1)] rounded-[2rem] mt-[-20%] flex justify-between flex-col p-6 pb-14 relative`}>

                <Image className="w-10 h-10 p-1  rounded-full ring-2 ring-gray-300 dark:ring-gray-500 absolute right-9 -top-6" src={avatar} alt="Bordered avatar" />

                <h2 className="w-full h-[2.8rem] text-3xl">{title}</h2>

                <p className="">
                    {text}
                </p>

                <div className="w-full flex items-start">
                    <p className="mr-2">􀉭</p>
                    <p className="text-base font-normal font-[Lato,_'Source_Sans_Pro'] text-gray-300">3 Members</p>
                </div>

            </div>
            <p className="w-[27.4rem] h-[1.6rem] absolute left-[1.2rem] top-48 text-[1.3rem] font-normal leading-[1.2] text-[rgba(255,_255,_255,_0.5500000119)] font-[Lato,_'Source_Sans_Pro'] whitespace-nowrap"></p>


        </div>
    )
}
