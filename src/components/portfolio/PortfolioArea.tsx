"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    type: "website" | "3d";
    tags: string[];
}

const PortfolioArea = () => {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [activeTab, setActiveTab] = useState<"all" | "website" | "3d">("all");

    useEffect(() => {
        const loadItems = async () => {
            const response = await fetch("/api/portfolio");
            const data = await response.json();
            setItems(data);
        };
        loadItems();
    }, []);

    const filteredItems = items.filter((item) => activeTab === "all" || item.type === activeTab);

    return (
        <div className="tp-portfolio-inner-ptb tp-animate-tab pb-90">
            <div className="container">
                <div className="tp-portfolio-inner-tab-wrap mb-55 tp_fade_anim" data-delay=".7">
                    <nav>
                        <div className="nav nav-tabs justify-content-center" role="tablist">
                            {[
                                { key: "all", label: "All Projects" },
                                { key: "website", label: "Websites" },
                                { key: "3d", label: "3D" },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                                    type="button"
                                    onClick={() => setActiveTab(tab.key as "all" | "website" | "3d")}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>

                <div className="row gx-60">
                    {filteredItems.map((item) => (
                        <div className="col-lg-6" key={item.id}>
                            <div className="mg-portfolio-item anim-zoomin-wrap mb-55">
                                <div className="mg-portfolio-thumb anim-zoomin not-hide-cursor">
                                    <div className="cursor-hide">
                                        <Image style={{ width: "100%", height: "auto" }} width={830} height={620} className="w-100" src={item.image} alt={item.title} />
                                    </div>
                                </div>
                                <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h3 className="cs-portfolio-title tp-title-anim fix mr-20 tp-ff-sequel-semi-bold mb-10">
                                            {item.title}
                                        </h3>
                                        <p className="mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>{item.description}</p>
                                        <div className="cs-portfolio-tag">
                                            <ul>
                                                {item.tags.map((tag, i) => (
                                                    <li key={i}><Link href="#">{tag}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <span className="badge bg-dark text-white">{item.type === "3d" ? "3D" : "Website"}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioArea;
