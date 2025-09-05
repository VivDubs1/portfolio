// src/app/projects/[slug]/page.tsx
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = products.find(x => x.slug === params.slug);
  return p
    ? { title: p.title, description: p.description }
    : {
        title: "Projects | John Doe",
        description:
          "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
      };
}

export default function SingleProjectPage({ params }: Props) {
  const product = products.find(x => x.slug === params.slug);
  if (!product) notFound();

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
