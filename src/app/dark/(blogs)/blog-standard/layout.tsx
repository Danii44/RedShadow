import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import StudioFooter from "@/layouts/footers/Footer";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import { VideoProvider } from "@/provider/VideoProvider";
import BootstrapLoader from "@/layouts/BootstrapLoader";
import StudioHeader from "@/layouts/headers/Header";
import AppProvider from "@/provider/AppProvider";

export default function BlogStandardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CursorAndBackgroundProvider>
            <ScrollSmoothProvider>
                <AnimationWrapper>
                    <AppProvider>
                        <BootstrapLoader>
                            <VideoProvider>
                                {/* -- global component -- */}
                                <div id="magic-cursor" className="cursor-black-bg">
                                    <div id="ball"></div>
                                </div>
                                <BackToTop />
                                <HeaderSearch />
                                <StudioHeader />
                                <div id="smooth-wrapper">
                                    <div id="smooth-content">
                                        {children}
                                        <StudioFooter />
                                    </div>
                                </div>
                            </VideoProvider>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </ScrollSmoothProvider >
        </CursorAndBackgroundProvider >
    );
}
