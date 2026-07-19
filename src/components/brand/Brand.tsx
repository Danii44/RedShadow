"use client";
import { brand_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const brandLogos = [
    { img: "/assets/img/brand/logo.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo-2.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo-3.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo-4.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo-2.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo-3.png", width: 128, height: 80 },
    { img: "/assets/img/brand/logo-4.png", width: 128, height: 80 },

];

const repeatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

const StudioBrand = () => {
    return (
        <div className="ca-brand-area">
            <div className="ca-brand-slider-active tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...brand_slider_params}
                >
                    {repeatedLogos.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <Link href="#" className="ca-brand-logo">
                                <Image
                                    src={brand.img}
                                    width={brand.width}
                                    height={brand.height}
                                    alt="Brand Logo"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default StudioBrand;
