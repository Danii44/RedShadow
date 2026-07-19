import StudioPortfolioItem from "./subComponents/PortfolioItem";
import portfolioData from "@/data/portfolio-data";
import { PortfolioStarIcon } from "@/svg";

const StudioPortfolio = () => {
    //display portfolio item
    const displayPortfolioItem = portfolioData.slice(0, 7);

    return (
        <div className="ca-portfolio-area portfolio-area pt-160 pb-130">
            <div className="container">

                {/* title */}
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 offset-xxl-3 offset-xl-4">
                        <div className="ca-portfolio-main-title-wrap">
                            <h2 className="ca-portfolio-main-title tp-ff-sequel-bold-head portfolio-text">
                                Featured
                                <span>
                                    CAD, 3D and engineering projects <PortfolioStarIcon />
                                </span>
                                <br /> from Red Shadow Designs
                            </h2>
                        </div>
                    </div>
                </div>

                {/* portfolio items */}
                <div className="row">
                    {displayPortfolioItem.map((item, index) => (
                        <StudioPortfolioItem {...item} key={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StudioPortfolio;
