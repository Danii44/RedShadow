import React from "react";

export default function SchemaMarkup() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Red Shadow Designs",
    "url": "https://redshadowdesigns.com",
    "logo": "https://redshadowdesigns.com/assets/img/logo/logo.png",
    "image": "https://redshadowdesigns.com/assets/img/hero/ca/thumb.jpeg",
    "description": "Red Shadow Designs delivers engineering-grade 3D CAD modeling, precision design for manufacturing (DFM), product visualization, and bespoke web systems.",
    "email": "hello@redshadowdesigns.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "3D CAD Modeling",
      "Mechanical Engineering",
      "Design for Manufacturing",
      "DFM",
      "Product Visualization",
      "Web Development",
      "Bespoke Digital Systems"
    ],
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Precision 3D CAD Design",
          "description": "DFM-optimized 3D modeling, mechanical drafting, and digital prototyping for production."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Visualization",
          "description": "Engineering-grade 3D renders, product animation, and photorealistic CGI visuals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Bespoke high-performance web systems and digital platforms tailored for industrial brands."
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Red Shadow Designs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Red Shadow Designs specialises in precision 3D modeling, CAD design, product visualisation and web development for engineering and product teams."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary by scope. Small CAD/modeling tasks are typically 1–3 weeks; full product design or web builds range from 4–12+ weeks. We provide a clear timeline after scoping."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Red Shadow Designs different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine engineering-grade CAD and 3D modelling expertise with production-ready web development — bridging the gap between design and manufacture."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle both design and development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our team delivers CAD/3D models, engineering drawings, product visuals and the web platforms to showcase and manage projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support after delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer maintenance, iteration, and production support packages to keep your models, assets and websites up to date."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle IP and file delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deliverables include native CAD files, STEP/IGES exports, production drawings, and the web source. We sign NDAs and transfer IP per contract."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Send project details or files to hello@redshadowdesigns.com and we'll schedule a scoping call to estimate time and cost."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
