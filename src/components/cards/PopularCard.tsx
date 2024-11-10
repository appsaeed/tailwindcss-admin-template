import rectangle from '@/public/assets/images/rectangle-831-wc1.png';
import Image from "../Image";
interface Props {
    bgImage?: string,
}

export default function PopularCard({ bgImage }: Props) {
    return (
        <div className="overflow-hidden rounded-[2rem] bg-cover flex">

            <div className="w-[40%] mr-[-6%]">
                <Image className="w-full h-full object-cover align-top" src={bgImage} />
            </div>
            <div className="w-[66%] bg-[linear-gradient(123.59deg,_#5b7fd6_0.3%,_#1bb1d0_41.03%)] rounded-[2rem] p-2 pr-0">

                <div className={`w-full h-full bg-cover flex flex-col justify-around text-center`}
                    style={{ backgroundImage: `url(${rectangle})` }}
                >

                    <h4 className="text-[2.2rem] font-semibold w-full">3D Art</h4>

                    <div className="flex text-base font-normal  whitespace-nowrap text-gray-300 self-center">
                        <p className="mr-4">􀉭</p>
                        <p>345,678 Members</p>
                    </div>

                    <p className="text-xl font-normal leading-[1.2] text-gray-400 whitespace-nowrap">A great place to discuss art.</p>




                </div>

            </div>




        </div>
    )
}
