import portfolioData from "@/data/portfolio-data";
import PortfolioSingleCard from "./subComponents/PortfolioSingleCard";

const PortfolioArea = () => {
    return (
        <div className="tp-portfolio-inner-ptb tp-animate-tab pb-90">
            <div className="container">
                <div className="row justify-content-center mb-45">
                    <div className="col-xl-8 text-center">
                        <span className="tp-section-subtitle text-uppercase d-inline-block mb-15">3D CAD Portfolio</span>
                        <h2 className="tp-ff-sequel-bold-head mb-15" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Engineering projects designed for real-world production.</h2>
                        <p className="mb-0">Explore precision CAD models, mechanical components, assemblies and product visualizations created by Red Shadow Designs.</p>
                    </div>
                </div>
                <div className="row gx-30">
                    {portfolioData.map((item) => (
                        <div className="col-xl-4 col-md-6" key={item.id}>
                            <PortfolioSingleCard item={item} compact />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioArea;
