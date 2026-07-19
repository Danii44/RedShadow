import AboutUsSlider from "@/components/about/AboutUsSlider";
import AboutUsIntro from "@/components/about/AboutUsIntro";
import AboutUsAward from "@/components/award/AboutUsAward";
import AboutUsArea from "@/components/about/AboutUsArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Red Shadow Designs",
};

const page = () => {
    return (
        <main>
            <AboutUsArea />
            <AboutUsSlider />
            <AboutUsIntro />
            <AboutUsAward />
        </main>
    );
};

export default page;
