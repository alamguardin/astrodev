import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";

function Content() {
    return (
        <div className="content">
            <HomeSection></HomeSection>
            <AboutSection></AboutSection>
            <PortfolioSection></PortfolioSection>
        </div>
    )
}

export default Content;