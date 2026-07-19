import { AutomationIcon, BrainstormingIcon, PrintProofIcon } from "@/svg/ServiceIcons";
import { serviceDT } from "@/types/service-dt";

const servicesData: serviceDT[] = [
    {
        id: 1,
        title: "Mechanical Engineering",
        image: "/assets/img/service/service.jpg",
        description: "Engineering support for components, assemblies and product systems built around functional requirements.",
    },
    {
        id: 2,
        title: "Precision 3D CAD Design",
        image: "/assets/img/service/service-2.jpg",
        description: "Accurate parts and assemblies developed for design review, documentation and production readiness.",
    },
    {
        id: 3,
        title: "Design for Manufacturing (DFM)",
        image: "/assets/img/service/service-3.jpg",
        description: "CAD refined around materials, processes, tolerances and efficient manufacture.",
    },
    {
        id: 4,
        title: "Digital Prototyping",
        image: "/assets/img/service/service-4.jpg",
        description: "Digital models and prototypes that help validate design direction before production investment.",
    },
    {
        id: 5,
        title: "Product Visualization",
        image: "/assets/img/service/service-4.jpg",
        description: "Engineering-grade visuals that clearly communicate product form, features and intended use.",
    },
    //agency shop service data start
    {
        id: 7,
        title: "Concept Development",
        description: `Engineering concepts, CAD strategy and visualization plans that support fast iteration.`,
        icon: BrainstormingIcon,
        delay: ".3",
    },
    {
        id: 8,
        title: "Process Automation",
        description: `Streamlining design-to-build workflows with CAD, visualization and web delivery in one system.`,
        icon: AutomationIcon,
        delay: ".5",
    },
    {
        id: 9,
        title: "Production Support",
        description: `Guidance on CAD handoff, manufacturing-ready assets and digital release readiness.`,
        icon: PrintProofIcon,
        delay: ".7",
    },
    //agency shop service data end
    //service two service data start
    {
        id: 10,
        year: "2015 - 2018",
        title: "Web Engineering",
        description:
            "Building responsive, technical websites with modern performance, usability and brand impact.",
    },
    {
        id: 11,
        year: "2019 - 2021",
        title: "CAD Integration",
        description:
            "Connecting CAD models, product visuals and delivery systems for seamless project execution.",
    },
    {
        id: 12,
        year: "2022 - 2024",
        title: "Visualization",
        description:
            "Deploying product visualisation that supports investor decks, engineering review and sales presentations.",
    },
    {
        id: 13,
        year: "2022 - 2024",
        title: "Digital Systems",
        description:
            "Crafting digital product ecosystems that align with manufacturing, marketing and engineering teams.",
    },
    //service two service data end
];

export default servicesData;
