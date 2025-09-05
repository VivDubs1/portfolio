import type { ReactNode } from "react";

export type Product = {
  href: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  stack: string[];
  slug: string;
  content: ReactNode;
};

export const products: Product[] = [
  {
    href: "https://github.com/Aditey1908/DocuSage", // Replace with actual DocuSage link if different
    title: "DocuSage – The Oracle of All Files",
    description:
      "Built a high-accuracy RAG pipeline with automated format normalization, transformer-based embeddings, and Astra DB vector search. Delivered context-rich answers with 97%+ accuracy across 10,000+ multi-format documents. Engineered precision-oriented context retrieval and synthesis using adaptive text chunking, semantic similarity thresholds, and relevance-ranked retrieval.",
    thumbnail: "/images/DocuSage (1).png",
    images: ["/images/Docusage_thumbnail.jpg"],
    stack: ["Python", "OpenAI GPT-4", "VoyageAI", "AstraDB"],
    slug: "docusage",
    content: (
      <div>
        <p>
          Built a high-accuracy retrieval-augmented generation (RAG) pipeline with automated format normalization, transformer-based embeddings, and Astra DB vector search, delivering context-rich answers with 97%+ accuracy across 10,000+ multi-format documents.
        </p>
        <p>
          Engineered precision-oriented context retrieval and synthesis using adaptive text chunking, semantic similarity thresholds, and relevance-ranked retrieval - processing complex queries end-to-end in approximately 20s to ensure maximum recall and factual correctness at scale.
        </p>
    
      </div>
    ),
  },
  {
    href: "https://team-alt-f4.itch.io/mirage",
    title: "Mirage",
    description:
      "Led a team of 5 in developing a 2D 8-bit RPG game using GDevelop for Smart India Hackathon 2023 to educate about intellectual property rights, featuring engaging puzzles, episodic content, and a gripping storyline.",
    thumbnail: "/images/Mirage_logo.png",
    images: ["/images/Mirage_Thumbnail.png"],
    stack: ["GDevelop", "Game Design"],
    slug: "mirage",
    content: (
      <div>

      </div>
    ),
  },
  {
    href: "#",
    title: "Web Scraper for AiVANTA",
    description:
      "Automated data extraction from ElevenLabs website by hovering over profile cards, making data insights more accessible and increasing efficiency. Built using Playwright, Selenium, and Python async workflows.",
    thumbnail: "/images/aivanta-logo.jpg",
    images: ["/images/web-scraper.jpg"],
    stack: ["Python", "Playwright", "Selenium", "Asyncio"],
    slug: "aivanta-scraper",
    content: (
      <div>
        <p>
          Automated information extraction from ElevenLabs website by hovering over profile cards, making data insights more accessible and increasing efficiency for AiVANTA.
        </p>
       
      </div>
    ),
  },
  {
    href: "#",
    title: "Proprietary Data Insights Dashboard for AiVANTA",
    description:
      "Comprehensive dashboard for company data insights using matplotlib, numpy, pandas, and more. Visualizes and analyzes all types of company data for actionable insights.",
    thumbnail: "/images/aivanta-logo.jpg",
    images: ["/images/aivanta_thumbnail.png"],
    stack: ["Python", "Matplotlib", "Numpy", "Pandas", "Dashboard"],
    slug: "aivanta-dashboard",
    content: (
      <div>
        <p>
          All kinds of data insights for AiVANTA presented on a proprietary dashboard, using matplotlib, numpy, pandas, and more for visualization and analysis.
        </p>
      </div>
    ),
  },
];
