import PortfolioBreadcrumb from "@/components/breadcrumb/PortfolioBreadcrumb";
import PortfolioArea from "@/components/portfolio/PortfolioArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "3D CAD Portfolio | Red Shadow Designs",
};

const page = () => {
    return (
        <main>
            <PortfolioBreadcrumb />
            <PortfolioArea />
        </main>
    );
};

export default page;
