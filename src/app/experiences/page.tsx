import { ExperienceCard } from "@/components/ExperienceCard";

const experiences = [
	{
		role: "Business Analyst Intern",
		company: "Tata Capital Ltd.",
		duration: "May ‘25 – July ’25",
		description:
			"Supported syndication of clean energy loans and investment analysis for BESS projects.",
		contributions: [
			"Mapped funding pathways for Rs.190+ Cr clean energy loans across 10+ global DFIs and MDBs, optimizing capital stacks and financing terms.",
			"Created investment briefs and analyzed real-time energy trading data to validate merchant revenue cases for BESS projects.",
		],
		link: "https://www.tatacapital.com/",
	},
	{
		role: "Account Manager",
		company: "AiVANTA",
		duration: "Apr ‘24 – Sept ’24",
		description:
			"Managed client outreach and partnerships for AI solutions and voice artist verticals.",
		contributions: [
			"Executed LinkedIn cold outreach strategy, increasing client base by 20% and securing high-ticket clients including ICICI Bank, Bajaj, Tata, Mahindra, and Canara Bank.",
			"Negotiated and closed deals in the voice artist vertical, doubling the artist base.",
		],
		link: "https://aivanta.com/",
	},
	{
		role: "Corporate Relations",
		company: "BloomBox, E-Cell, KJSCE",
		duration: "Oct ‘23 – May ’25",
		description: "Negotiated sponsorships and led high-impact event planning for E-Cell.",
		contributions: [
			"Closed pivotal deal with Duolingo, securing 60% of ESummit 2024 budget; brought on top keynote speakers and led flagship events engaging 2000+ students.",
			"Planned and executed Shark Tank Simulation, Virtual Stock Market, and The Startup Code, boosting event visibility and impact.",
		],
		link: "https://bloombox.com/",
	},
	{
		role: "Product Management Intern",
		company: "Caarya",
		duration: "Aug ‘23 – Feb ’24",
		description: "Led market research and collaborated on app development for SaaS products.",
		contributions: [
			"Generated database of 1000+ startups and analyzed 500+ for trends and gaps, providing strategic insights to the CEO.",
			"Collaborated with app development team to enhance user experience and delivered presentations to improve communication.",
		],
		link: "https://caarya.com/",
	},
];

export const metadata = {
	title: "Vivin Dube - Student",
	description: "Experiences of Vivin Dube.",
};

export default function ExperiencesPage() {
	return (
		<div className="min-h-screen bg-neutral-50 py-10 flex flex-col items-center">
			<h1 className="text-4xl font-bold mb-8">My Experiences</h1>
			<div className="space-y-8 w-full max-w-3xl">
				{experiences.map((exp, idx) => (
					<ExperienceCard key={idx} {...exp} />
				))}
			</div>
		</div>
	);
}
