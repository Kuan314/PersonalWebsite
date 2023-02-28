import React from "react";

const navigation = [
	{name: "Challenges", href: "/PersonalWebsite/#/Challenges"},
	{name: "Website", href: "/PersonalWebsite/#/website"},
	{name: "Other", href: "#"}
];

const Header = () => {
	return (
		<div className="grid grid-cols-2 pt-4 mx-3 min-w-screen">
			<div className="font-bold sm:text-2xl text-xl text-textPrimary">
				<a href="/PersonalWebsite/">
					Home
				</a>
			</div>
			<div className="flex justify-end">
				{navigation.map((item) => (
					<a 
						key={item.name}
						href={item.href}
						className="sm:px-2 sm:py-1 p-1 sm:text-m text-s sm:mx-6 mx-1 font-bold border rounded border-black hover:ease-out"
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	)
}

export default Header;