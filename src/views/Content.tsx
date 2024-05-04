import { HTMLAttributes } from "react"
import Banner from "../components/Banner"
import { default as Cardtitle, default as FeatureTitle } from "../components/FeatureTitle"
import SearchBar from "../components/SearchBar"
import FeatureCard from "../components/cards/FeatureCard"
import PopularCard from "../components/cards/PopularCard"
import RecentCard from "../components/cards/RecentCard"

export default function Content(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>

            <SearchBar />

            <div className="p-[2.4rem] flex-shrink-0">

                <Banner content="Find Your Community <br /> on Daccord" />

                <Cardtitle text="Featured Community" seeAll />

                <div className="flex gap-6 justify-between">

                    <FeatureCard
                        title="Virtual Reality"
                        text="A community for VR and novices alike, regular and friendly chat." />

                    <FeatureCard
                        bgImage={'/src/assets/images/photo-1539140953823-8de95668cb0e-1-uPb.png'}
                        title="Game Play" text="A community for VR and novices alike, regular and friendly chat." />

                </div>

                <Cardtitle text="Popular Right Now" seeAll />

                <div className="flex gap-6 justify-between">

                    <PopularCard bgImage="./assets/photo-1634986666676-ec8fd927c23d-1-Cd3.png" />
                    <PopularCard bgImage="./assets/photo-1634986666676-ec8fd927c23d-1-Cd3.png" />

                </div>

                <FeatureTitle text="Recent Add" seeAll />

                <div className="w-full flex gap-6 justify-between">

                    <RecentCard
                        title="Move Recapped"
                        text="Discuss your favourite movies and TV serie here." />

                    <RecentCard
                        title="Science"
                        text="A community for a scientific exploration enthusiast."
                        bgImage="/src/assets/images/photo-1539140953823-8de95668cb0e-1-PCR.png"
                    />

                    <RecentCard
                        title="Space"
                        text="A community for the space enthusiast."
                        bgImage="./assets/photo-1539140953823-8de95668cb0e-1-evh.png"
                    />

                </div>
            </div>
        </div>
    )
}
