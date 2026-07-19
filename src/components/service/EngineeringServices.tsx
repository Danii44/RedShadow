import Image from "next/image";
import SmartLink from "@/components/common/SmartLink";
import { ServiceArrowIcon } from "@/svg";
import servicesData from "@/data/service-data";

const EngineeringServices = () => {
    const services = servicesData.slice(0, 5);

    return (
        <section id="service" className="tp-service-area tp-bg-grey pt-145 pb-120">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-11 col-xl-12">
                        <div className="tp-about-title-wrap mb-30">
                            <h2 className="tp-section-title reveal-text" style={{ fontSize: "clamp(1.75rem, 3.4vw, 3.25rem)", lineHeight: 1.15, maxWidth: 1080 }}>
                                Empowering industrial brands and product developers to move from concept to production with DFM-optimized CAD, digital prototyping, and engineering-grade design.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="tp-about-border mt-20 pt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-40">
                            <Image
                                className="w-100 img-cover"
                                src={services[0].image || "/assets/img/service/service.jpg"}
                                alt="Precision 3D CAD design"
                                width={600}
                                height={560}
                            />
                        </div>
                        <div className="col-lg-7 mb-40">
                            <div className="tp-service-list-wrap ml-60">
                                {services.map((service) => (
                                    <div key={service.id} className="tp-service-item service-item mb-5">
                                        <h3 className="tp-service-title tp-ff-sequel-roman d-inline-block" style={{ fontSize: "clamp(1.35rem, 2.2vw, 2.25rem)", lineHeight: 1.15 }}>
                                            <SmartLink href={`/service-details/${service.id}`}>
                                                {service.title}
                                                <span className="tp-service-icon d-inline-block"><ServiceArrowIcon /></span>
                                            </SmartLink>
                                        </h3>
                                        <p className="mb-20" style={{ maxWidth: 620 }}>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngineeringServices;
