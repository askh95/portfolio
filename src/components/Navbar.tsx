"use client";

import React from "react";

interface NavbarInterface {
	selected?: string;
	setSelected?: (selected: string) => void;
}

function Navbar({ setSelected, selected }: NavbarInterface) {
	const OnClick = (menu: string) => {
		setSelected && setSelected(menu);
	};

	const items = [
		{
			name: "О себе",
			value: "about",
		},
		{
			name: "Опыт",
			value: "experience",
		},
		{
			name: "Проекты",
			value: "projects",
		},
	];

	return (
		<div className="hidden lg:flex flex-col tracking-widest w-fit mt-16">
			{items?.map((item, index) => (
				<span
					key={index}
					onClick={() => OnClick(item.value)}
					className={`nav-text ${
						item.value === selected && "nav-selected"
					} text-xs font-bold py-4`}
				>
					{item.name}
				</span>
			))}
		</div>
	);
}

export default Navbar;
