interface Props {
    text?: string;
    seeAll?: boolean
}

export default function MiniTitle({
    text = 'Mini Title',
    seeAll
}: Props) {
    return (
        <div className="mb-[1.6rem] w-full flex items-center flex-shrink-0">
            <p className="mr-[7.3rem] text-[1.5rem] font-normal leading-[1.2] text-[rgba(255,_255,_255,_0.5500000119)] font-[Lato,_'Source_Sans_Pro'] whitespace-nowrap flex-shrink-0">{text}</p>
            {seeAll && <p className="text-right text-[1.5rem] font-normal leading-[1.2] text-[rgba(255,_255,_255,_0.25)] font-[Lato,_'Source_Sans_Pro'] whitespace-nowrap flex-shrink-0">See all</p>}
        </div>
    )
}
