import { Metadata } from "next";
import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import StudioHeader from "@/layouts/headers/Header";
import StudioFooter from "@/layouts/footers/Footer";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import AppProvider from "@/provider/AppProvider";
import StudioHero from "@/components/hero/Hero";
import StudioAbout from "@/components/about/About";
import StudioBrand from "@/components/brand/Brand";
import StudioPortfolio from "@/components/portfolio/Portfolio";
import StudioTeamAndTestimonials from "@/components/testimonial/Testimonials";
import StudioFaqArea from "@/components/faq/Faq";
import StudioCtaArea from "@/components/cta/Cta";

export const metadata: Metadata = {
    title: "Red Shadow Designs — 3D CAD & Web Development",
    description: "Red Shadow Designs delivers dark 3D CAD modeling, product visualization, and web development for engineering and product teams.",
};

const RootPage = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <AppProvider>
                        <div id="magic-cursor" className="cursor-black-bg">
                            <div id="ball"></div>
                        </div>
                        <BackToTop />
                        <HeaderSearch />
                        <StudioHeader />
                        <div id="smooth-wrapper">
                            <div id="smooth-content">
                                <main>
                                    <StudioHero />
                                    <StudioAbout />
                                    <StudioBrand />
                                    <StudioPortfolio />
                                    <StudioTeamAndTestimonials />
                                    <StudioFaqArea />
                                    <StudioCtaArea />
                                </main>
                                <StudioFooter />
                            </div>
                        </div>
                    </AppProvider>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default RootPage;
