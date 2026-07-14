import { ButtonArrowIconTwo } from "@/svg";
import SmartLink from "../common/SmartLink";

const StudioAbout = () => {
    return (
        <div className="ca-about-area pt-145 pb-150">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10">
                        <div className="ca-about-title-wrap text-center">
                            <h2 className="ca-section-title ca-about-title reveal-text mb-50">At Red Shadow Designs, we engineer 3D CAD, product visualization and web systems that help manufacturers,
                                product teams and engineering firms move from concept to production.
                            </h2>
                            <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <SmartLink href="/about-us" className="tp-btn tp-btn-xl tp-btn-grey tp-btn-switch-animation">
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">More about Us</span>
                                        <span className="btn-icon">
                                            <ButtonArrowIconTwo />
                                        </span>
                                        <span className="btn-icon">
                                            <ButtonArrowIconTwo />
                                        </span>
                                    </span>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioAbout;
