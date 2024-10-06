"use client";
import { useEffect, useRef, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Screen from "@/components/Screen";
import Socials from "@/components/Socials";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";

export default function Home() {
	const [selected, setSelected] = useState<string>("about");
	const [aboutInView, setAboutInView] = useState<boolean>(false);
	const [projectInView, setProjectInView] = useState<boolean>(false);

	const aboutRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const element = aboutRef.current;
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top > -300) {
					setSelected("about");
					if (!aboutInView) {
						setAboutInView(true);
					}
				} else {
					if (aboutInView) {
						setAboutInView(false);
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [setSelected, setAboutInView, aboutInView]);

	useEffect(() => {
		const handleScroll = () => {
			const element = experienceRef.current;
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top < 300 && !aboutInView && !projectInView) {
					setSelected("experience");
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [setSelected, aboutInView, projectInView]);

	useEffect(() => {
		const handleScroll = () => {
			const element = projectsRef.current;
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top < 300) {
					setSelected("projects");
					if (!projectInView) {
						setProjectInView(true);
					}
				} else {
					if (projectInView) {
						setProjectInView(false);
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [setSelected, setProjectInView, projectInView]);

	const handleSelect = (selectedTab: string) => {
		setSelected(selectedTab);
		switch (selectedTab) {
			case "about":
				if (typeof window !== "undefined") {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}
				return;
			case "experience":
				experienceRef.current?.scrollIntoView({ behavior: "smooth" });
				return;
			case "projects":
				projectsRef.current?.scrollIntoView({ behavior: "smooth" });
				return;
			default:
				return;
		}
	};

	return (
		<Screen>
			<div className="flex relative flex-col lg:flex-row w-full">
				<div className="flex w-full lg:w-1/2 lg:sticky flex-col lg:top-0 lg:h-screen py-12 lg:py-24 px-4 lg:px-0">
					<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
						<a href="/" data-ninja-font="inter_bold_normal" className="">
                        Askh95
						</a>
					</h1>
					<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
						Frontend-developer
					</h2>
					<p className="mt-4 max-w-xs leading-normal text-base">
						Фронтенд-разработчик с опытом в React и Next.js. Постоянно
						совершенствую навыки.
					</p>
					<Navbar selected={selected} setSelected={handleSelect} />
					<Socials />
				</div>
				<div className="flex w-full lg:w-1/2 py-10 lg:py-24">
					<div className="flex flex-col w-full">
						<div ref={aboutRef}></div>
						<AboutSection />
						<div ref={experienceRef}></div>
						<ExperienceSection />
						<div ref={projectsRef}></div>
						<ProjectsSection />
						<Footer />
					</div>
				</div>
			</div>
		</Screen>
	);
}
