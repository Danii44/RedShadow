import { ArrowIconEight } from "@/svg/ArrowIcons";

const awardsData = [
    {
        text: "for real-world manufacturing constraints.",
        title: "Manufacturing-Aware Design",
        year: "01",
    },
    {
        text: "built for review, refinement and informed decisions.",
        title: "Clear Digital Prototypes",
        year: "02",
    },
    {
        text: "from individual parts to complete assemblies.",
        title: "Precision in Every Detail",
        year: "03",
    },
    {
        text: "that communicate function, form and intent.",
        title: "Engineering-Grade Visualization",
        year: "04",
    },
    {
        text: "from concept through production handoff.",
        title: "A Collaborative Process",
        year: "05",
    },
];

const AboutUsAward = () => {
    return (
        <div className="cs-awards-area pt-130 pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mg-awards-title-wrap mb-15 text-center text-md-start">
                            <h2 className="mg-awards-title tp-ff-sequel-bold-head reveal-text" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.15 }}>
                                Our
                            </h2>
                            <span className="mg-awards-title-sm tp-ff-sequel-bold-head">
                                Engineering Principles
                            </span>
                        </div>

                        <div className="mg-awards-item-wrap mp-awards-item-wrap cs-awards-item-wrap fix">
                            {awardsData.map((item, index) => (
                                <div key={index} className="right-item-animetion">
                                    <div className="mp-awards-item d-flex justify-content-between align-items-center gap-4">
                                        <div className="mp-awards-left mb-20">
                                            <span className="count">
                                                <ArrowIconEight />
                                                {item.text}
                                            </span>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="mp-awards-right mb-20">
                                            <span>{item.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsAward;
