import ServiceIntroBanner from "@/components/banner/ServiceIntroBanner";
import ServiceGallery from "@/components/gallery/ServiceGallery";
import PageBanner from "@/components/banner/PageBanner";
import EngineeringServices from "@/components/service/EngineeringServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering & CAD Services | Red Shadow Designs",
};

const page = () => {
    return (
        <main>
            <ServiceIntroBanner />
            <PageBanner />
            <EngineeringServices />
            <ServiceGallery />
        </main>
    );
};

export default page;
