import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export const metadata = {
  title: "Vivin Dube - Student",
  description: "Portfolio of Vivin Dube.",
};

export default function Home() {
  return (
    <Container>
      
      <Heading className="font-black">Hey there! I&apos;m Vivin</Heading>
      <Paragraph className="max-w-xl mt-4">
        I’m a Computer Engineering student at K.J. Somaiya. 
        <br></br>I solve problems, connect dots and keep it clean.

        <br></br><br></br>Business, data, product, systems, are my forte.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
