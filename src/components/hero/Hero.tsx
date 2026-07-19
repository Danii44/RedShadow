import { ArrowIconThree } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const services = [
    "Mechanical Engineering",
    "Precision 3D CAD Design",
    "Design for Manufacturing (DFM)",
    "Digital Prototyping",
    "Product Visualization"
];

const StudioHero = () => {
    return (
        <div className="ca-hero-area ca-hero-spacing tp-hero-bg">
            <div className="container">
                <div className="row">
                    {/* Left Hero Section */}
                    <div className="col-xl-4 col-lg-5 col-md-5">
                        <div className="ca-hero-left pt-65 pb-30">
                            {/* REPLACED VIDEO WITH NEXT.JS IMAGE */}
                            <div className="ca-hero-video p-relative" style={{ width: '100%', height: '300px' }}>
                                <Image
                                    src="/assets/img/hero/ca/Orbei.webp" 
                                    alt="Hero Side Visual"
                                    fill
                                    priority
                                    className="img-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className="ca-hero-service">
                                <ul>
                                    {services.map((service, idx) => (
                                        <li key={idx}>
                                            <Link href="#">
                                                <span className="explore-text" data-text={service}>
                                                    {service}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Center Hero Section */}
                    <div className="col-xl-5 col-lg-7 col-md-7">
                        <div className="ca-hero-title-wrap pt-50 pb-105">
                            <h2 className="ca-hero-title cd-headline clip tp_title_anim mb-30 no-js text-center">
                                <br />  
                                Precision 3D CAD
                                <br />
                                &
                                <br />
                                Mechanical Engineering Solutions.
                            </h2>
                            <p className="ca-hero-desc mb-55 text-center">
                                Empowering industrial brands and product developers to move from concept to production with DFM-optimized CAD, digital prototyping, and engineering-grade design.
                            </p>

                            <SmartLink
                                className="tp-btn tp-btn-norotate ca-hero-btn tp-ff-inter"
                                href="#portfolio"
                            >
                                <span>
                                    <span className="text-1">Explore All Work</span>
                                    <span className="text-2">Explore All Work</span>
                                </span>
                                <i>
                                    <ButtonArrowIcon />
                                    <ButtonArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>

                    {/* Right Hero Section */}
                    <div className="col-xl-3 col-lg-5">
                        <div className="ca-hero-dec ml-60 pb-30">
                            <p>
                                <ArrowIconThree />
                                We build precision 3D models, CAD<br />
                                product designs and engineering-grade<br />
                                visualization, paired with modern web<br />
                                systems for industrial teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Thumbnail */}
            <div className="ca-hero-thumb fix scale-up-img">
                <Image
                    width={1905}
                    height={720}
                    data-speed="0.4"
                    className="img-cover scale-up"
                    src="/assets/img/hero/ca/thumb.jpeg"
                    alt="thumb"
                />
            </div>
        </div>
    );
};

export default StudioHero;