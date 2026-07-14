import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import StudioFooter from "@/layouts/footers/Footer";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import BootstrapLoader from "@/layouts/BootstrapLoader";
import StudioHeader from "@/layouts/headers/Header";
import AppProvider from "@/provider/AppProvider";

export default function ModernAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <AppProvider>
                        <BootstrapLoader>
                            {/* -- global component -- */}
                            <div id="magic-cursor" className="cursor-black-bg">
                                <div id="ball"></div>
                            </div>
                            <BackToTop />
                            <HeaderSearch />
                            <StudioHeader />
                            <div id="smooth-wrapper">
                                <div id="smooth-content">
                                    {children} {/* Render the main content of the current page here */}
                                    <StudioFooter />
                                </div>
                            </div>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
}
