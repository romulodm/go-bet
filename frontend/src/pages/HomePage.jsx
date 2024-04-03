import AffiliateLink from "../components/home/AffiliateLink"
import Carousel from "../components/home/carousel/Carousel"
import Newsletter from "../components/home/Newsletter"
import Technologies from "../components/home/Technologies"

export default function HomePage() {
    return (
        <>
            <Carousel />
            <Technologies />
            <AffiliateLink />
            <Newsletter />
        </>
    )
}