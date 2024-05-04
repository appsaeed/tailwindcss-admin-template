type Props = {
    text?: string,
    seeAll?: boolean,
}

export default function FeatureTitle({ text, seeAll }: Props) {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="text-4xl f-semibold font-[SF_Compact_Rounded,_'Source_Sans_Pro']">{text}</div>
            {seeAll && <div className="text-lg font-normal text-gray-500">See all</div>}
        </div>
    )
}
