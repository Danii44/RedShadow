import Image from "next/image";
import { notFound } from "next/navigation";
import portfolioData from "@/data/portfolio-data";
import PortfolioSingleCard from "@/components/portfolio/subComponents/PortfolioSingleCard";

export default async function PortfolioDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = portfolioData.find((item) => item.id === Number(id));

    if (!project) notFound();

    const relatedProjects = portfolioData.filter((item) => item.id !== project.id).slice(0, 2);

    return (
        <main>
            <section className="tp-pd-2-ptb tp-pd-3-style pt-120 pb-90">
                <div className="container">
                    <p className="text-uppercase mb-20">3D CAD Project · {project.year}</p>
                    <h1
                        className="tp-pd-3-title tp-ff-sequel-bold-head lh-1 mb-35"
                        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", maxWidth: 950 }}
                    >
                        {project.title}
                    </h1>
                    <div className="scale-up-img" style={{ maxWidth: 1100, margin: "0 auto" }}>
                        <Image src={project.image} alt={project.title} width={1600} height={1000} className="w-100 img-cover" priority />
                    </div>
                </div>
            </section>
            {relatedProjects.length > 0 && (
                <section className="tp-portfolio-area pb-110">
                    <div className="container">
                        <h2 className="tp-portfoliom-m-title mb-40" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>More 3D CAD Projects</h2>
                        <div className="row">
                            {relatedProjects.map((item) => <div className="col-lg-6" key={item.id}><PortfolioSingleCard item={item} /></div>)}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
