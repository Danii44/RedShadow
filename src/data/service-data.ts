import { AutomationIcon, BrainstormingIcon, PrintProofIcon } from "@/svg/ServiceIcons";
import { serviceDT } from "@/types/service-dt";

const servicesData: serviceDT[] = [
    {
        id: 1,
        title: "3D CAD Engineering",
        image: "/assets/img/service/service.jpg",
        description: "Engineering-ready CAD models and assemblies for manufacturing and product development.",
    },
    {
        id: 2,
        title: "Product Visualization",
        image: "/assets/img/service/service-2.jpg",
        description: "High-fidelity product visuals that communicate form, function and production intent.",
    },
    {
        id: 3,
        title: "Mechanical Modeling",
        image: "/assets/img/service/service-3.jpg",
        description: "Precision part modeling, simulation-ready geometry and detail for engineering teams.",
    },
    {
        id: 4,
        title: "Industrial Web Development",
        image: "/assets/img/service/service-4.jpg",
        description: "Modern web platforms built for technical brands, engineering services and product launches.",
    },
    {
        id: 5,
        title: "Design Systems",
        image: "/assets/img/service/service-4.jpg",
        description: "Coherent design systems that scale product portfolios, CAD workflows and digital presence.",
    },
    {
        id: 6,
        title: "Technical Branding",
        image: "/assets/img/service/service-4.jpg",
        description: "Brand identities tailored for engineering, industrial design and product innovation.",
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