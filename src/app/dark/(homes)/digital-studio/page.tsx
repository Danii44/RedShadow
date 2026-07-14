import StudioTeamAndTestimonials from "@/components/testimonial/Testimonials";
import StudioPortfolio from "@/components/portfolio/Portfolio";
import StudioCtaArea from "@/components/cta/Cta";
import StudioFaqArea from "@/components/faq/Faq";
import StudioAbout from "@/components/about/About";
import StudioBrand from "@/components/brand/Brand";
import StudioHero from "@/components/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Red Shadow Designs — 3D CAD & Web Development",
    description: "Red Shadow Designs delivers dark 3D CAD modeling, industrial design, and web development for engineering and product innovation.",
};

const page = () => {
    return (
        <main>
            <StudioHero />
            <StudioAbout />
            <StudioBrand />
            <StudioPortfolio />
            <StudioTeamAndTestimonials />
            <StudioFaqArea />
            <StudioCtaArea />
        </main>
    );
};

export default page;