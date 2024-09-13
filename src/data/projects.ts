export type ProjectType = {
	id: string;
	name: string;
	link: string;
	linkText: string;
	cover: string;
	description: string;
	stack?: string[];
	frontPage?: boolean;
	detail?: any;
	madeIn?: string;
	madeAt?: string;
};

export const Projects: ProjectType[] = [
	{
		id: "intraverse",
		name: "Pathway",
		link: "https://pathway-eight.vercel.app/",
		linkText: "pathway-eight.vercel.app",
		cover: "/intraversecover.png",
		description:
			"Наслаждайтесь чувством достижения с приложением, созданным для отслеживания вашего прогресса, мотивации усилий и празднования ваших успехов.",
		stack: ["React", "TypeScript", "Tailiwind CSS", "Framer-Motion"],
		frontPage: true,
		detail: {},
		madeIn: "2024",
		madeAt: "Freelance",
	},
	{
		id: "intraverse",
		name: "Click&Cart",
		link: "https://click-cart-vert.vercel.app/",
		linkText: "click-cart-vert.vercel.app",
		cover: "/click-cart.png",
		description:
			"Click&Cart — это демонстрация простого полнофункционального e-commerce сайта, разработанного с использованием Next.js.",
		stack: ["React", "TypeScript", "Tailiwind CSS", "Framer-Motion"],
		frontPage: true,
		detail: {},
		madeIn: "2024",
		madeAt: "Freelance",
	},
];
