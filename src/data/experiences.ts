export type ExperienceType = {
	start: string;
	end: string;
	title: string;
	description: string;
	company: string;
	year?: string;
	link: string;
	skills?: string[];
};

export const Experiences: ExperienceType[] = [
	{
		start: "2024",
		end: "Сейчас",
		title: "Frontend Developer",
		company: "Protomind",
		link: "https://protomind.tech/",
		description:
			"Работал над созданием комплексной системы управления совещаниями и обработки видеозаписей, реализовав интерактивные дашборды и систему обработки видео в реальном времени с использованием веб-сокетов. Самостоятельно разработал UI/UX дизайн в Figma и успешно интегрировал его в проект, обеспечив интуитивный интерфейс. Проект был выполнен с нуля.",
		skills: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"RTK Query",
			"Socket.IO",
			"Vite",
		],
	},
	{
		start: "2023",
		end: "2024",
		title: "Junior Frontend Developer",
		company: "RentEase",
		link: "https://www.myrentease.co/",
		description:
			"Работал на проекте, участвуя в создании интерактивной карты и системы бронирования. Помогал в разработке личных кабинетов для пользователей и внедрении системы отзывов. Внес вклад в оптимизацию приложения, что способствовало улучшению производительности и UX.",
		skills: [
			"Next.js",
			"TypeScript",
			"React Query",
			"CSS in JS",
			"Jest",
			"Storybook",
			"e2e",
		],
	},
];
