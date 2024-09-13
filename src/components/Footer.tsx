import React from "react";

function Footer() {
	return (
		<footer className="max-w-md pb-16 mt-20 text-sm text-slate-500 sm:pb-0 px-4 lg:px-0">
			<p className="text-[#64748b]">
				Написано в{" "}
				<a
					href="https://code.visualstudio.com/"
					className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Visual Studio Code (opens in a new tab)"
				>
					Visual Studio Code
				</a>
				. Создано с использованием{" "}
				<a
					href="https://nextjs.org/"
					className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Next.js (opens in a new tab)"
				>
					Next.js
				</a>{" "}
				и{" "}
				<a
					href="https://tailwindcss.com/"
					className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Tailwind CSS (opens in a new tab)"
				>
					Tailwind CSS
				</a>
				, задеплоено в{" "}
				<a
					href="https://vercel.com/"
					className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Vercel (opens in a new tab)"
				>
					Vercel
				</a>
			</p>
		</footer>
	);
}

export default Footer;
