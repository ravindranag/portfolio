import { LinkIcon, TriangleAlertIcon } from "lucide-react";
import Link from "next/link";
import { css } from "@/styled-system/css";
import { container, hstack, vstack } from "@/styled-system/patterns";
import Surface from "@/ui/Surface/Surface";

const experiences = [
	{
		id: "shuru",
		company: "Shuru",
		title: "Software Engineer",
		type: "Freelancing",
		description:
			"Helping the founder with a MVP that focuses on effective Human-AI interactions. Architected a MVP which is a real-time group chat of Humans and customisable AI personas while simultaneously managing the DevOps infrastructure and deployment pipelines on AWS.",
		period: {
			from: "September 2023",
			to: "present",
		},
		link: "https://shuru.io",
	},
	{
		id: "solytics-partners-1",
		company: "Solytics Partners",
		title: "Associate Software Engineer",
		type: "Full Time",
		description:
			"Worked as a full-stack engineer for MRM Vault- a model risk, governance, and inventory management application. Contributed to core features like dynamic model attributes, model health, a custom UAM for a client, and general bug solving. Spearheaded a frontend framework from CRA to Vite, achieving a 75% reduction in deployment time (from 40 minutes to 10 minutes).",
		period: {
			from: "January 2025",
			to: "March 2026",
		},
		link: "https://www.solytics-partners.com",
	},

	{
		id: "solytics-partners-0",
		company: "Solytics Partners",
		title: "Frontend Consultant",
		type: "Contractual",
		description:
			"Daily responsibilities included bug solving, building UI and collaborating with backend engineers to design and integrate APIs.",
		period: {
			from: "May 2024",
			to: "December 2024",
		},
		link: "https://www.solytics-partners.com",
	},
	{
		id: "nexus-power",
		company: "Nexus Power",
		title: "Frontend Developer (through LancyFirm)",
		type: "Freelancing",
		description:
			"Developed the company's website using React and MUI. Delivered pixel perfect UI and animations according to figma provided, also ensuring best SEO performance and responsiveness.",
		period: {
			from: "March 2024",
			to: "March 2024",
		},
		link: "https://www.nexuspower.in",
	},
	{
		id: "benignant-power",
		company: "Benignant Power Pvt Ltd",
		title: "Fullstack Intern",
		type: "Internship",
		description:
			"Tasked with migration of company's website to Next.js for better SEO. ",
		period: {
			from: "June 2023",
			to: "July 2023",
		},
		link: "https://benignant-power.vercel.app",
	},
];

export default function Page() {
	return (
		<main
			className={container({
				maxWidth: "4xl",
				paddingInline: 0,
			})}
		>
			<Surface variant="contained">
				<h1 className={css({ fontSize: "2xl" })}>Hi, I am Ravindra Nag.</h1>
				<p>I am a Software Engineer</p>
			</Surface>

			<div className={vstack({ p: 4, gap: 6, alignItems: "start" })}>
				<h2 className={css({ fontSize: "xl" })}>My Journey</h2>
				<ol className={vstack({ gap: 4, alignItems: "start" })}>
					{experiences.map((e) => (
						<li key={e.id}>
							<div className={vstack({ alignItems: "start", gap: 0.5 })}>
								<div className={hstack({ gap: 2 })}>
									<h3 className={css({ fontSize: "lg", fontWeight: 500 })}>
										{e.company}
									</h3>
									<Link
										href={e.link}
										target="_blank"
										aria-label={`Link to ${e.company}`}
									>
										<LinkIcon
											size={12}
											className={css({
												color: "gray.600",
												_hover: {
													color: "gray.950",
												},
											})}
										/>
									</Link>
								</div>
								<div
									className={hstack({
										gap: 2,
										fontSize: "sm",
										color: "gray.600",
										flexWrap: "wrap",
										rowGap: 0,
									})}
								>
									<p className={css({ color: "gray.600" })}>{e.title}</p>
									<span className={css({ color: "gray.600" })}>|</span>
									<p className={css({ color: "gray.600" })}>{e.type}</p>
									<span className={css({ color: "gray.600" })}>|</span>
									<p className={css({ color: "gray.600" })}>
										{e.period.from} - {e.period.to}
									</p>
								</div>
								<p className={css({ fontSize: "sm", textWrap: "pretty" })}>
									{e.description}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>

			<div
				className={vstack({
					p: "64px 16px",
					gap: 4,
				})}
			>
				<TriangleAlertIcon className={css({ color: "amber.500" })} />
				<p>This website is a work in progress.</p>
			</div>
		</main>
	);
}
