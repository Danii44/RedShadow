import ContactUsFormArea from "@/components/contact/ContactUsFormArea";
import ContactUsInfoArea from "@/components/contact/ContactUsInfoArea";
import ContactUsTopIntro from "@/components/contact/ContactUsTopIntro";
import ContactInnerMap from "@/components/contact/ContactInnerMap";
import ContactUsAbout from "@/components/about/ContactUsAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Red Shadow Designs",
};
const page = () => {
    return (
        <main>
            <ContactUsTopIntro />
            <ContactInnerMap />
            <ContactUsFormArea />
            <ContactUsAbout />
            <ContactUsInfoArea />
        </main>
    );
};

export default page;
