
interface Props {
    content?: string
}
export default function Banner({ content }: Props) {
    return (
        <div className={`w-full h-72 bg-cover rounded-[2rem] bg-[url(./assets/photo-1647351408653-d582b364bf2f-hhf.png)] flex  items-center`}>
            <div className="w-full text-center align-middle font-semibold text-4xl text-gray-300" dangerouslySetInnerHTML={{ __html: content ? content : '' }}>
            </div >
        </div >
    )
}


