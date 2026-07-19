import { ArrowIconSix } from "@/svg";
import Image from "next/image";

type AboutFeature = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const aboutFeatures: AboutFeature[] = [
    {
        id: 1,
        title: "Engineering-Led Design",
        description:
            "We turn early ideas into purposeful, technically sound CAD models that support confident development decisions.",
        image: "/assets/img/about/thumb-3.jpg",
    },
    {
        id: 2,
        title: "Production-Ready Detail",
        description:
            "Our work is designed around real materials, manufacturing processes, tolerances and assembly requirements.",
        image: "/assets/img/about/thumb-4.jpg",
    },
];

const AboutUsIntro = () => {
    return (
        <div className="tp-about-area pt-145">
            <div className="container">
                {/* Title */}
                <div className="row align-items-end">
                    <div className="col-xxl-10 col-xl-12">
                        <div className="tp-about-title-wrap mb-30">
                            <h2 className="tp-section-title reveal-text">
                                Empowering industrial brands and product developers to move from concept to production with DFM-optimized CAD, digital prototyping, and engineering-grade design.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="tp-about-border mt-20 pt-55">
                    <div className="row">
                        {/* Subtitle */}
                        <div className="col-lg-4">
                            <div className="tp-about-subtitle-wrap mb-30">
                                <span className="tp-about-subtitle text-uppercase">
                                    <ArrowIconSix /> Red Shadow Designs
                                </span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="col-lg-8">
                            <div className="tp-about-thumb-wrap ml-75">
                                <div className="row gx-80">
                                    {aboutFeatures.map((item) => (
                                        <div key={item.id} className="col-lg-6 col-md-6">
                                            <div className="tp-about-item anim-zoomin-wrap mb-40">
                                                <div className="mb-35">
                                                    <div className="tp-about-thumb fix anim-zoomin">
                                                        <Image
                                                            style={{ width: "100%", height: "auto" }}
                                                            width={491}
                                                            height={600}
                                                            data-speed=".8"
                                                            src={item.image}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tp-about-content">
                                                    <h3 className="tp-about-title mb-10">
                                                        {item.title}
                                                    </h3>
                                                    <p className="tp-about-dec">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* End Features */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsIntro;
